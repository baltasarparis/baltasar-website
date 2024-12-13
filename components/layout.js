import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Navigation from "../components/navigation";
import Link from 'next/link';
import Footer from './footer';
import { useTranslation } from 'next-i18next';


export default function Layout({ children, home }) {
  const { t } = useTranslation('common'); // Utilise le fichier de traduction "common"

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content={t('description')} />
        <meta property="og:title" content={t('ogTitle')} key="title" />
        <meta property="og:description" content={t('ogDescription')} key="title" />
        <meta property="og:url" content="www.baltasar.paris" key="title" />
        <meta name='og:image' content='https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/fond+paris+gris+format+M.jpg' />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Navigation />
      <div className='w-screen mb-6'>
        <div className="w-[90%] mx-auto">
          <main>{children}</main>
          <br />
          <Link href="/" className='mx-6 py-12'>← {t('backToHome')}</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
