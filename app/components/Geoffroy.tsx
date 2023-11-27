import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const Geoffroy: React.FC = () => {
    return (
        <>
            <div className="splitImg" style={{ background: `url('https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/Geoffroy+Solo+Site.jpg')` }}></div>
            <div className="splitText">
                <h2>Geoffroy Daignes</h2>
                <p>
                    Geoffroy Daignes conseille des grandes entreprises, fédérations, start ups, associations et leurs dirigeants depuis plus de 10 ans.
                </p>
                <p>
                    Il a débuté sa carrière en développant pendant trois ans une start up dans le secteur de l’éducation et de la formation professionnelle. Il a par la suite travaillé pour de grands groupes de communication (Publicis / Havas) et au sein de cabinets spécialisés en affaires publiques (Batout Guilbaud / Pergamon).
                </p>
                <p>
                    Au cours de ce parcours, il s’est spécialisé dans les secteurs de la santé, du numérique, de l’éducation et de l’énergie.
                </p>
                <p>
                    Il contribue au débat public par des publications dans des revues (Le Débat - Gallimard) et dans la presse (Le Monde, Le Figaro, Libération…).
                </p>
                <div style={{ display: 'flex', fontWeight: 'bold', marginTop: '30px' }}>
                    <FaLinkedin size={23} style={{ marginRight: 8 }} />  <a href="https://www.linkedin.com/in/geoffroy-daignes-a26b4b60/" target="_blank">                    Visitez son  Linkedin
                    </a>
                </div>

            </div >
        </>
    );
};

export default Geoffroy;