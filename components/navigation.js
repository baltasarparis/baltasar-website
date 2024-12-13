import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
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
    <nav className="w-screen h-[17vh] md:h-[20vh]  md:h-[22vh] bg-white py-6">
      <div className="w-[90%] mx-auto flex items-start justify-between">
        <div className="flex flex-col">
          {/* Logo redirigeant vers la page d'accueil */}
          <Link href="/">
            <img
              src="/assets/images/blacklogo.png"
              alt={t('title')}
              className="w-[180px] md:w-[300px] cursor-pointer"
            />
          </Link>
          <p className="text-lg ml-1 md:ml-2 pt-3">{t('description')}</p>
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-auto flex items-center space-x-4 pt-2 md:mt-6">
          {/* Burger Menu Icon */}
          <button
            className="text-gray-600 hover:text-black focus:outline-none lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Language Switcher */}
          <button
            className="hover:text-gray-600 text-lg font-medium lg:hidden"
            onClick={switchLanguage}
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-lg font-medium items-center pt-2 md:mt-6">
          <a href="/" className="hover:text-baltacolor">{t('menu.home')}</a>
          <a href="/articles" className="hover:text-baltacolor">{t('menu.studies')}</a>
          <a href="/equipe" className="hover:text-baltacolor">{t('menu.team')}</a>
          <a href="mailto:contact@baltasar.paris" className="hover:text-baltacolor">{t('menu.contact')}</a>
          <button
            className="hover:text-baltacolor text-lg font-medium"
            onClick={switchLanguage}
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="z-50 lg:hidden bg-white absolute top-[70px] left-0 w-full rounded-xl flex flex-col items-center space-y-4 py-4 mx-auto">
          <a href="/" className="hover:text-baltacolor">{t('menu.home')}</a>
          <a href="/articles" className="hover:text-baltacolor">{t('menu.studies')}</a>
          <a href="/equipe" className="hover:text-baltacolor">{t('menu.team')}</a>
          <a href="mailto:contact@baltasar.paris" className="hover:text-baltacolor">{t('menu.contact')}</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
