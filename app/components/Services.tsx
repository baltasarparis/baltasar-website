import React, { useEffect, useState } from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import { Tablist, Tab, Pane, Paragraph } from 'evergreen-ui';

const Services: React.FC = () => {
    const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [tabs] = React.useState(['Conseil en affaires publiques', 'Conseil en communication stratégique'])

    useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (

        <div className="servicesText">
            <h2>Services</h2>
            <Pane display={ (viewportWidth > 600) ? 'flex' : ''} >
                <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                    {tabs.map((tab, index) => {
                        return (
                            <Tab
                                aria-controls={`panel-${tab}`}
                                direction="vertical"
                                isSelected={index === selectedIndex}
                                key={tab}
                                style={{fontSize: "16px", marginBottom: 30, padding: 21}}
                                onSelect={() => setSelectedIndex(index)}
                            >
                                {tab}
                            </Tab>
                        )
                    })}
                </Tablist>
                <Pane padding={16} background="tint1" flex="1">
                    {tabs.map((tab, index) => (
                        <Pane
                            aria-labelledby={tab}
                            aria-hidden={index !== selectedIndex}
                            display={index === selectedIndex ? 'block' : 'none'}
                            key={tab}
                            role="tabpanel"
                        >
                            {tab === "Conseil en affaires publiques" ? (<> <h3>Conseil en affaires publiques</h3>
                                <p>Conseil en affaires publiques : nous aidons les entreprises à faire entendre leurs intérêts légitimes auprès des décideurs publics.
                                </p>
                                <p><MdArrowRightAlt size={25} />
                                    Feuille de route stratégique</p>
                                <p><MdArrowRightAlt size={25} />
                                    Argumentaires techniques et position paper</p>
                                <p><MdArrowRightAlt size={25} />
                                    Veille législative et réglementaire</p>
                                <p><MdArrowRightAlt size={25} />
                                    Préparation de rendez-vous</p>
                                <p><MdArrowRightAlt size={25} />
                                    Événements de sensibilisation</p></>) : (<> <h3> Conseil en communication stratégique</h3>
                                        <p>Conseil en communication : nous accompagnons les entreprises et décideurs dans la rédaction et la diffusion de leurs récits.
                                        </p>
                                        <p><MdArrowRightAlt size={25} />
                                            Stratégie de communication corporate</p>
                                        <p><MdArrowRightAlt size={25} />
                                            Interventions dirigeants et thought leadership </p>
                                        <p><MdArrowRightAlt size={25} />
                                            Communication de crise</p>
                                        <p><MdArrowRightAlt size={25} />
                                            Communication interne</p>
                                        <p><MdArrowRightAlt size={25} />
                                            Veille presse et réseaux sociaux</p></>)}
                        </Pane>
                    ))}
                </Pane>
            </Pane>

        </div>


    );
};

export default Services;