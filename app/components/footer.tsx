import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <img
        src="https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/White+logo+-+no+background.png"
        alt="Logo Baltasar"
        className="navLogoImg"
      />
      <div style={{ textAlign: 'center' }}>
        <p>100 rue ordener, 75018 Paris</p>
        <p>+33 6 36 65 65 65</p>
        <p>contact@baltasar.paris</p>
      </div>
    </div>
  );
};

export default Footer;