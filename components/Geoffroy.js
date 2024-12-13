import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

// Utilisation de forwardRef pour permettre au parent de passer une ref
const Geoffroy = forwardRef((props, ref) => {
    const { t } = useTranslation('common');
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="w-[100%] mb-6" ref={ref} id="team">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-[100%]" ref={elementRef}>
                <div
                    className={`w-[100%] inline md:hidden min-h-[40vh] md:min-h-[70vh] mb-6 md:mb-0 rounded-md bg-cover bg-center transition-transform duration-1000 ease-out`}
                    style={{
                        backgroundImage: `url('/assets/images/Geoffroy.jpg')`,
                        backgroundPosition: '45% 20%',
                    }}
                ></div>
                <div
                    className={`w-[100%] min-h-[calc(50vh-130px)] rounded-md bg-gray-100 flex flex-col p-6 md:p-12 relative transition-transform duration-1000 ease-out`}
                >
                    <h2 className="text-3xl font-semibold mb-4">{t('geoffroy.name')}</h2>
                    <div className="text-xs md:text-base">
                        {t('geoffroy.description').split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br /> <br />
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Icône LinkedIn */}
                    <div className="absolute top-4 right-4 flex items-center font-bold">
                        <a
                            href="https://www.linkedin.com/in/geoffroy-daignes-a26b4b60/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={25} className="mr-2" />
                        </a>
                    </div>
                </div>
                <div
                    className={`w-[100%] hidden md:inline md:min-h-[40vh] md:min-h-[70vh] mb-6 md:mb-0 rounded-md bg-cover bg-center transition-transform duration-1000 ease-out`}
                    style={{
                        backgroundImage: `url('/assets/images/Geoffroy.jpg')`,
                        backgroundPosition: '45% 20%',
                    }}
                ></div>
            </div>
        </div>
    );
});

// Ajout du displayName pour résoudre l'erreur
Geoffroy.displayName = 'Geoffroy';

export default Geoffroy;
