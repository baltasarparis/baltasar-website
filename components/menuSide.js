import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MenuSide() {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { locale } = router;
    const [isMounted, setIsMounted] = useState(false); // To check if client is mounted
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage burger menu
  
    // Function to switch language between 'en' and 'fr'
    const switchLanguage = useCallback(() => {
      const nextLocale = locale === 'en' ? 'fr' : 'en';
      router.push(router.pathname, router.asPath, { locale: nextLocale });
    }, [locale, router]);
  
    useEffect(() => {
      // Set the component as mounted to avoid mismatch between SSR and CSR
      setIsMounted(true);
    }, []);
  
    // Toggle the burger menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    // Prevent rendering on the server until the client is mounted
    if (!isMounted) {
      return null;
    }
    return (
        <div className="sideMenu">
            <img
                src="https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/Color+logo+-+no+background.png"
                alt="Logo Baltasar"
                className="navLogoImg"
            />
            <br />
            <a href="/" className="hover:text-baltacolor">{t('menu.home')}</a>
            <a href="/articles" className="hover:text-baltacolor">{t('menu.studies')}</a>
            <a href="/equipe" className="hover:text-baltacolor">{t('menu.team')}</a>
            <a href="mailto:contact@baltasar.paris" className="hover:text-baltacolor">{t('menu.contact')}</a>
            {/* <a href="#">Nos Publications</a> */}
            <a href="mailto:contact@baltasar.paris">
                Contactez-nous
            </a>
            <br />
            <img
                src="https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/fond+paris+gris+format+M.jpg"
                className="imageMenu"
                alt="Description of Baltasar"
            />
        </div>
    );
}
