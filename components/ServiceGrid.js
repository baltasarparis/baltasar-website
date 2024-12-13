import React, { useState, useEffect } from "react";
import Card from "./CardService";
import { MdOutlineTask, MdOutlineGavel, MdOutlineEvent, MdOutlineCampaign } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function CardGrid() {
    const { t } = useTranslation('common');
    const [visibleCards, setVisibleCards] = useState([]);

    const cardData = [
        {
            icon: MdOutlineTask,
            title: t("services.strategicRoadmap"),
            description: t("services.strategicRoadmapDescription"),
            linkText: t("services.moreDetails"),
        },
        {
            icon: MdOutlineGavel,
            title: t("services.technicalBriefs"),
            description: t("services.technicalBriefsDescription"),
            linkText: t("services.moreDetails"),
        },
        {
            icon: MdOutlineEvent,
            title: t("services.legislativeMonitoring"),
            description: t("services.legislativeMonitoringDescription"),
            linkText: t("services.moreDetails"),
        },
        {
            icon: MdOutlineCampaign,
            title: t("services.meetingPreparation"),
            description: t("services.meetingPreparationDescription"),
            linkText: t("services.moreDetails"),
        },
        {
            icon: MdOutlineCampaign,
            title: t("services.awarenessEvents"),
            description: t("services.awarenessEventsDescription"),
            linkText: t("services.moreDetails"),
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleCards((prevVisibleCards) => {
                if (prevVisibleCards.length < cardData.length) {
                    return [...prevVisibleCards, prevVisibleCards.length];
                }
                clearInterval(interval);
                return prevVisibleCards;
            });
        }, 300); // délai entre l'apparition de chaque carte
        return () => clearInterval(interval);
    }, [cardData]);

    return (
        <div>
            <p className="my-6">{t("services.publicAffairsDescription")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`transform transition duration-500 ease-out ${
                            visibleCards.includes(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <Card
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            linkText={card.linkText}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
