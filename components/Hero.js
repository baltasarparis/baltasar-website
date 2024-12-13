import React, { useEffect, useState } from 'react';
import BlogList from './Blog';
import Title from './Title';

const Hero = (props) => {
    const [scrollY, setScrollY] = useState(0);

    // Fonction pour gérer le scroll
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrollY(scrollPosition);
    };

    // Effet pour écouter l'événement scroll et nettoyer après démontage
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const topPosition = Math.max(50, Math.min(78, 78 - (scrollY / 100))); // Limiter entre 75vh et 78vh


    return (
        <div className='w-screen mb-6'>
            <div className='z-0'>
                <div
                    className={`rounded-xl h-[77vh] md:h-[100vh] w-[90%] mx-auto bg-center bg-cover flex flex-col justify-center transition-transform duration-300 ease-out`}
                    style={{
                        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url('/assets/images/background.jpeg')"
                    }}
                >
                    <div className='absolute rounded-xl right-[10%] top-[44%] md:right-[29%] md:top-[65%] text-black bg-baltacolor p-2 md:p-6 text-sm md:text-base'>
                        57, rue de Turbigo, Paris III
                    </div>

                    {/* Div avec une légère animation flip */}

                </div>
            </div>
            <div
                className='z-10  rounded-xl shadow bg-white w-[80%] mx-auto mt-[-150px] px-6 py-1'
            >
                <BlogList allArticlesData={props.allArticlesData} />
            </div>
        </div>
    );
};

export default Hero;
