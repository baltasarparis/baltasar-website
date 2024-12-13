import { useEffect, useState, useRef } from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSortedArticlesData } from '../lib/articles';
import { useRouter } from 'next/router';
import Alexis from "../components/Alexis";
import Geoffroy from "../components/Geoffroy";
import Title from '../components/Title';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Home({ allArticlesData }) {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common'); // Utilise le fichier de traduction "common"

  return (
    <div> {/* Ajoute la transition */}
      <Navigation />
      <div className='md:w-[80%] mx-auto py-12'>
        <Link href="/" className='ml-12'>← {t('backToHome')}</Link>
      </div>
      <div className='w-[80%] mx-auto my-12'>
        <div className='flex justify-center my-12'>
          <Title text="Notre Equipe" />
        </div>
        <Alexis />
        <Geoffroy />
      </div>
      <div className='md:w-[80%] mx-auto py-12'>
        <Link href="/" className='ml-12'>← {t('backToHome')}</Link>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const allArticlesData = getSortedArticlesData();

  return {
    props: {
      allArticlesData,
      ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}
