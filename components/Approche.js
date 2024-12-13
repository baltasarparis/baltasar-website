import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import Title from './Title';
// Utilisation de forwardRef pour passer la référence au parent
const Approche = forwardRef((props, ref) => {
    const { t } = useTranslation('common');
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Pour gérer l'apparition au scroll
    const elementRef = useRef(null);

    // Effet pour vérifier si l'élément est visible lors du scroll
    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        // Vérifier la visibilité au montage initial
        handleScroll();

        // Écouter les événements de scroll
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div id="approche" ref={ref} className='py-12'>
            <div className='w-screen mb-6'>
                <div className='rounded-xl bg-white w-[100%] mx-auto py-12'>
                    <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2  gap-6 " ref={elementRef}>
                        <div
                            className={`mb-6 md:mb-0 rounded-xl bg-cover bg-center transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                            style={{
                                backgroundImage: `url('/assets/images/approche.jpg')`,
                                backgroundPosition: '45% 37%',
                            }}
                        >
                        </div>

                        <div
                            className={`w-full  rounded-md bg-gray-100 flex flex-col p-6 md:p-12 relative transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                        >
                            <Title text={t('approach.title')} />
                            <p className="text-xs md:text-sm">
                                {t('approach.description').split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        <p className='py-1'>{line}</p>

                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Approche;
