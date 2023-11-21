import React from 'react';

const Services: React.FC = () => {
    return (
        <>
            <div className="servicesText">
                <h3>Conseil en affaires publiques</h3>
                <p>Conseil en affaires publiques : nous aidons les entreprises à faire entendre leurs intérêts légitimes auprès des décideurs publics.
                </p>
                <li> Feuille de route stratégique</li>
                <li> Argumentaires techniques et position paper</li>
                <li> Veille législative et réglementaire</li>
                <li> Préparation de rendez-vous</li>
                <li> Événements de sensibilisation</li>
            </div>
            <div className="servicesText">
                <h3> Conseil en communication stratégique</h3>
                <p>Conseil en communication : nous accompagnons les entreprises et décideurs dans la rédaction et la diffusion de leurs récits.
                </p>
                <li>Stratégie de communication corporate</li>
                <li>Interventions dirigeants et thought leadership </li>
                <li>Communication de crise</li>
                <li>Communication interne</li>
                <li>Veille presse et réseaux sociaux</li>
            </div>
        </>
    );
};

export default Services;