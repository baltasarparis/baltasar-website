import { useEffect, useState, useRef } from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSortedArticlesData } from '../lib/articles';
import { useRouter } from 'next/router';
import ArticlesList from '../components/ArticlesList';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Home({ allArticlesData }) {
  const [scrollY, setScrollY] = useState(0);
  const [background, setBackground] = useState('white'); // État pour la couleur de fond
  const [approcheOffset, setApprocheOffset] = useState(0);
  const [servicesOffset, setServicesOffset] = useState(0);
  const [alexisOffset, setAlexisOffset] = useState(0);
  const approcheRef = useRef(null);
  const servicesRef = useRef(null);
  const alexisRef = useRef(null);
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common'); // Utilise le fichier de traduction "common"

  // Écoute du défilement de la page
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour mettre à jour les offsets après le premier rendu
  const updateOffsets = () => {
    if (approcheRef.current) {
      const approchePosition = approcheRef.current.getBoundingClientRect();
      setApprocheOffset(approchePosition.top + window.scrollY);
    }

    if (servicesRef.current) {
      const servicesPosition = servicesRef.current.getBoundingClientRect();
      setServicesOffset(servicesPosition.top + window.scrollY);
    }

    if (alexisRef.current) {
      const alexisPosition = alexisRef.current.getBoundingClientRect();
      setAlexisOffset(alexisPosition.top + window.scrollY);
    }
  };

  // Mise à jour des offsets après le rendu
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateOffsets();
    }, 500); // Délai pour garantir que tout est bien rendu

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



  return (
    <div style={{ backgroundColor: background, transition: 'background-color 500ms' }}> {/* Ajoute la transition */}
      <Navigation scroll={scrollY} />
      <div className='md:w-[80%] mx-auto py-12'>
        <Link href="/" className='ml-12'>← {t('backToHome')}</Link>
      </div>
      <ArticlesList allArticlesData={allArticlesData} />
      <div className='md:w-[80%] mx-auto py-12'>
        <Link href="/" className='ml-12'>← {t('backToHome')}</Link>
      </div>
      <Footer />
    </div>
  );
}



export async function getStaticProps({ locale }) {
  const allArticlesData = getSortedArticlesData().map(article => ({
    ...article,
    date: article.date ? new Date(article.date).toISOString() : null, // Conversion sécurisée des dates
  }));

  return {
    props: {
      allArticlesData,
      ...(await serverSideTranslations(locale, ['common'])), // Ajout des traductions
    },
  };
}
