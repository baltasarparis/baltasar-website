import { Tooltip } from "evergreen-ui";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const ProgressBar = ({ scroll, equipe, approche, services }) => {
    const { t } = useTranslation('common');
    const [activeSection, setActiveSection] = useState("");

    // Points de menu avec les sections correspondantes (traduits via t)
    const menu = [
        { key: 'accueil', label: t('progressBar.home'), offset: 0 },
        { key: 'approche', label: t('progressBar.approach'), offset: approche },
        { key: 'services', label: t('progressBar.services'), offset: services },
        { key: 'team', label: t('progressBar.team'), offset: equipe }
    ];

    useEffect(() => {
        // Détermine la section active en fonction du scroll
        const currentSection = menu.find((item, index) => {
            const nextItem = menu[index + 1];
            return scroll > item.offset && (!nextItem || scroll < nextItem.offset);
        });

        if (currentSection) {
            setActiveSection(currentSection.key);
        }
    }, [scroll, menu]);

    return (
        <div className="fixed top-1/2 left-[5px] lg:left-6 z-50 transform -translate-y-1/2">
            {menu.map((item, index) => (
                <Tooltip
                    key={item.key}
                    content={
                        <div>
                            <a href={'#' + item.key} className="text-white">
                                {item.label}
                            </a>
                        </div>
                    }
                    position="right"
                >
                    <div
                        className={`h-[15px] w-[15px] rounded-full my-3 ${activeSection === item.key ? 'bg-[#FFD601]' : 'bg-white border-[1px] border-black'}`}
                    >
                    </div>
                </Tooltip>
            ))}
        </div>
    );
};

export default ProgressBar;
