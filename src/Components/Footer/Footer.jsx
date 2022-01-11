import "./Footer.scss"
import Navigator from "../Nav/Nav"
import Logo from "../../Assets/Images/footer-logo.svg"
import Twitter from "../../Assets/Images/logo-twiiter.svg"
import Instagram from "../../Assets/Images/logo-instagram.svg"
import Facebook from "../../Assets/Images/logo-facebook.svg"
function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <a href="#">
                    <img src={Logo} width={237} height={27}/>
                </a>
                <Navigator/>
                    
                <div className="footer__img-wrapper">
                    <a className="footer__img-link" href="#">
                        <img className="footer__image" src={Facebook} width={24} height={24}/>
                    </a>
                    <a className="footer__img-link" href="#">
                        <img className="footer__image" src={Twitter} width={24} height={24}/>
                    </a>
                    <a className="footer__img-link" href="#">
                        <img className="footer__image" src={Instagram} width={24} height={24}/>
                    </a>
            </div>
            </div>
        </footer>
    )
}
export default Footer;