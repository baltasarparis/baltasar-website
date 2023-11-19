"use client";
import Navigation from "./components/navigation"
import { useEffect, useState } from 'react';
import { SideSheet } from "evergreen-ui";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "./components/footer";
import ProgressBar from "./components/progressBar";
import MenuSide from "./components/menuSide";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const allSectionDivs = [...document.querySelectorAll('div.section')];

    const updatedArray = [];
    allSectionDivs.forEach((div, index) => {
      const offset = div.offsetTop
      updatedArray.push(offset)
    });
    setSections(updatedArray)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render


  return (
    <div className="container">
      <Navigation scroll={scrollY} />
      <ProgressBar scroll={scrollY} threshold={sections}/>

      <div onClick={() => setIsShown(true)} className={(scrollY > 200) ? "navBurgerScrolled" : "navBurger"} >
        <GiHamburgerMenu size={25} />
      </div>
      <div className="section">1 {scrollY}</div>
      <div className="section section2">2 {scrollY}</div>
      <div className="section section2">3 {scrollY}</div>
      <div className="section section2">4 {scrollY}</div>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)} width="80vw">
        <MenuSide />
      </SideSheet>
      <Footer />
    </div>
  )
}