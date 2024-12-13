import React, { useEffect, useState, forwardRef } from 'react';

import { useTranslation } from 'react-i18next';
import Title from './Title';
import CardGrid from './ServiceGrid';
import StrategicCommunication from './StrategicCommunication';

const Services = forwardRef((props, ref) => {
    const { t } = useTranslation('common');
    const [viewportWidth, setViewportWidth] = useState(undefined);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [tabs] = useState([
        t('services.publicAffairs'),
        t('services.strategicCommunication')
    ]);
    const [isMounted, setIsMounted] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setViewportWidth(window.innerWidth);

            const handleResize = () => {
                setViewportWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [tabs]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (viewportWidth === undefined || !isMounted) {
        return null; // or return a loading indicator
    }

    return (
        <div
            className="w-screen mb-6 flex flex-col items-center "
            ref={ref}
            id="services"
        >
            <Title text={t('services.title')} />
            <div className="w-[80%] mx-auto">

                <div className="flex space-x-0 md:space-x-0 text-sm md:text-base">
                    <button
                        onClick={() => setActiveTab(0)}
                        className={`px-4 py-2 w-[130px] md:w-[230px] rounded-full ${activeTab === 0
                            ? "bg-baltacolor text-back"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {t('services.publicAffairs')}
                    </button>
                    <button
                        onClick={() => setActiveTab(1)}
                        className={`px-4 py-2 w-[130px] md:w-[230px] rounded-full ${activeTab === 1
                            ? "bg-baltacolor text-back"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {t('services.strategicCommunication')}
                    </button>
                </div>

                <div className="p-4 w-[100%]">
                    {activeTab === 0
                        &&
                        <div>
                            <CardGrid />
                        </div>
                    }
                    {activeTab === 1 &&
                        <div>
                            <StrategicCommunication />
                        </div>
                    }
                </div>
            </div>


        </div>
    );
});

export default Services;
