export default function Navigation(props) {
    return (
        <div className={ (props.scroll > 200) ? "nav navScrolled" : "nav"}>
            <div className="navLogo">
                <img src="https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/Color+logo+-+no+background.png" alt="Logo Baltasar"  className="navLogoImg"/>
            </div>
            <div className="navMenu">
                <a href="#">Notre Approche</a>
                <a href="#">Nos Métiers</a>
                <a href="#">Notre Equipe</a>
                <a href="#">Nos Publications</a>
            </div>
            <div className="navContact">
                <div className="navBtn">
                    Contactez-nous
                </div>
            </div>
        </div>
    )
}