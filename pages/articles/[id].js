import Layout from '../../components/layout';
import { getAllArticleIds, getArticleData } from '../../lib/articles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Title from '../../components/Title';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Article({ articleData }) {
  const { t } = useTranslation('common'); // Utilise le fichier de traduction "common"

  return (
    <>
      <Navigation />

      <div className='w-[80%] mx-auto my-12'>
        <div className='my-12'>
          <Link href="/" className='py-12'>← {t('backToHome')}</Link>
        </div>
        <Title text={articleData.title} />
        <p>{articleData.date}</p>

        <div className='my-12'>
          <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </div>
        <div className='my-12'>
          <Link href="/" className='py-12'>← {t('backToHome')}</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const articles = getAllArticleIds();  // Get all article paths

  const paths = articles.flatMap((article) => {
    // Log the article object to inspect it
    console.log('Article:', article.params.id);

    return ['en', 'fr'].map((locale) => ({
      params: { id: article.params.id ? article.params.id.toString() : '' },  // Access the id correctly
      locale,
    }));
  });

  console.log('Generated paths:', paths);  // Log paths to the console for debugging

  return {
    paths,
    fallback: false,  // Set to 'blocking' or 'true' if necessary
  };
}

export async function getStaticProps({ params, locale }) {
  const articleData = await getArticleData(params.id);  // Fetch the article by ID

  return {
    props: {
      articleData,
      ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}