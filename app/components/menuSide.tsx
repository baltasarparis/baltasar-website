

export default function MenuSide() {
    return (
        <div className="sideMenu">
            <img src="https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/Color+logo+-+no+background.png" alt="Logo Baltasar" className="navLogoImg" />
            <br />
            <a href="#approche">Approche</a>
            <a href="#services">Métiers</a>
            <a href="#equipe">Equipe</a>
            {/* <a href="#">Nos Publications</a> */}
            <a href="mailto:contact@baltasar.paris">
                Contactez-nous</a>
            <br />

            <img src="https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/fond+paris+gris+format+M.jpg" className="imageMenu" alt="Description of Baltasar" />
        </div>
    )
}