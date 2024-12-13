import React, { useState, useEffect } from "react";
import Card from "./CardService";
import { MdOutlineCorporateFare, MdOutlinePerson, MdOutlineCrisisAlert, MdOutlineMessage, MdOutlineNewspaper } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function StrategicCommunication() {
    const { t } = useTranslation("common");
    const [visibleCards, setVisibleCards] = useState([]);

    const cardData = [
        {
            text: t("services.corporateCommunication"),
            icon: MdOutlineCorporateFare,
        },
        {
            text: t("services.leadershipInterventions"),
            icon: MdOutlinePerson,
        },
        {
            text: t("services.crisisCommunication"),
            icon: MdOutlineCrisisAlert,
        },
        {
            text: t("services.internalCommunication"),
            icon: MdOutlineMessage,
        },
        {
            text: t("services.pressMonitoring"),
            icon: MdOutlineNewspaper,
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
            <p className="my-6">{t("services.strategicCommunicationDescription")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`transform transition duration-500 ease-out ${visibleCards.includes(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <Card
                            icon={card.icon}
                            title={card.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}