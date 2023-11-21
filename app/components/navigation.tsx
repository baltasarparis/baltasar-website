import React from 'react';
import { FaPaperPlane } from "react-icons/fa";

interface MyComponentProps {
  // Define your prop types here
  scroll: number;
}

const Navigation: React.FC<MyComponentProps> = (props) => {


  return (
    <div className={props.scroll > 200 ? 'nav navScrolled' : 'nav'}>
      <div className="navLogo">
        <img
          src="https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/Color+logo+-+no+background.png"
          alt="Logo Baltasar"
          className="navLogoImg"
        />
      </div>
      <div className="navMenu">
        <a href="#approche">Approche</a>
        <a href="#services">Métiers</a>
        <a href="#equipe">Equipe</a>
        {/* <a href="#">Publications</a> */}
      </div>
      <div className="navContact">
        <a className="navBtn" href="mailto:gd@baltasar.paris">
          Contactez-nous
        </a>
      </div>
    </div>
  );
};

export default Navigation;