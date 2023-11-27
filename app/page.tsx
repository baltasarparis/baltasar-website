"use client";
import Navigation from "./components/navigation"
import { useEffect, useState } from 'react';
import { SideSheet } from "evergreen-ui";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "./components/footer";
import ProgressBar from "./components/progressBar";
import MenuSide from "./components/menuSide";
import Approche from "./components/Approche";
import Services from "./components/Services";
import Alexis from "./components/Alexis";
import Geoffroy from "./components/Geoffroy";
export default function Home() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [sections, setSections] = useState<number[]>([]);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const allSectionDivs = Array.from(document.querySelectorAll('div.pin')) as any[];

    const updatedArray: number[] = [];
    allSectionDivs.forEach((div, index) => {
      const offset = div.offsetTop;
      updatedArray.push(offset);
    });
    setSections(updatedArray);



    // Clean up the event listener when the component unmounts


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render


  return (
    <div className="container">
      <Navigation scroll={scrollY} />
      <ProgressBar scroll={scrollY} threshold={sections} />

      <div onClick={() => setIsShown(true)} className={(scrollY > 200) ? "navBurgerScrolled" : "navBurger"} >
        <GiHamburgerMenu size={25} />
      </div>
      <div className="section pin hero" id="accueil">
        <h1>Conseil en <strong>affaires publiques</strong> et <strong>communication</strong> stratégique</h1>
      </div>
      <div className="section pin sectionSplit" id="approche">
        <Approche />
      </div>
      <div className="section pin sectionServices" id="services">
        <Services />
      </div>

      <div className="section  sectionSplitReverse" >
        <Alexis />
      </div>
      <div className="section pin sectionSplit" id="equipe">
        <Geoffroy />
      </div>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)} width="80vw">
        <MenuSide />
      </SideSheet>
      <Footer />
    </div>
  )
}