import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const Alexis: React.FC = () => {
    return (
        <>
            <div className="splitImg" style={{ background: `url('https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/Alexis+solo+site.jpg')` }}></div>
            <div className="splitText">
                <h2>Alexis Abeille</h2>
                <p>
                    Alexis Abeille a près de 10 ans d’expérience dans l’accompagnement d’entreprises, fondations, fédérations et de dirigeants.
                </p>
                <p>
                    Passé par des grands groupes de communication, il a également travaillé à la direction de la Fondation Pierre Deniker, située au sein de l’hôpital Sainte-Anne à Paris, qui vise à soutenir la recherche en psychiatrie et sensibiliser le public aux troubles psychiques.
                </p>
                <p>
                    Engagé pour l’information des jeunes aux enjeux de santé mentale, il est également un lecteur de romans et contribue ponctuellement avec Geoffroy Daignes (notamment pour la revue Le Débat) au débat public.
                </p>

                <p>
                    Il est diplômé de Sciences Po Paris (2012) et de l’ESCP Europe (2015).
                </p>
                <div style={{ display: 'flex', fontWeight: 'bold', marginTop: '30px' }}>
                    <FaLinkedin size={23} style={{ marginRight: 8 }} />  <a href="https://www.linkedin.com/in/alexis-abeille-b6a3a263/" target="_blank">                    Visitez son  Linkedin
                    </a>
                </div>
            </div>
        </>
    );
};

export default Alexis;