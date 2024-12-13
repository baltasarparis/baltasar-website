import { useEffect, useState, useRef } from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import ProgressBar from "../components/progressBar";
import Hero from "../components/Hero";
import Approche from "../components/Approche";
import Services from "../components/Services";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSortedArticlesData } from '../lib/articles';
import { useRouter } from 'next/router';
import Team from '../components/Team';
import NewsletterSignup from '../components/Newsletter';

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

    if (alexisRef.current) {
      const alexisPosition = alexisRef.current.getBoundingClientRect();
      setAlexisOffset(alexisPosition.top + window.scrollY);
    }

    if (servicesRef.current) {
      const servicesPosition = servicesRef.current.getBoundingClientRect();
      setServicesOffset(servicesPosition.top + window.scrollY);
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
      <ProgressBar scroll={scrollY} equipe={alexisOffset} approche={approcheOffset} services={servicesOffset} />
      <Hero allArticlesData={allArticlesData} />
      <Approche id="approche" ref={approcheRef} />
      <Services id="services" ref={servicesRef} />
      <Team id="equipe" ref={alexisRef}/>
      <NewsletterSignup />
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
