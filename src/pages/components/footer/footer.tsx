import "./footer.css"
import { ReactComponent as Twiter } from "../../../assets/fa-twitter (2).svg"
import { ReactComponent as Facebook } from "../../../assets/fa-twitter (3).svg"
import { ReactComponent as Telegram } from "../../../assets/Vector (37).svg"

interface FooterProps {}
 
const Footer: React.FC<FooterProps> = () => {
    return ( 
        <footer className="footer_wrapper">
            <div className="footer-text">
                <p className="footer-p">2022 © Все права защищены. Сделано в Everest.uz</p>
                <p className="footer-p">Крупнейший межотраслевой комплекс.</p>
            </div>
            <div className="footer-social_media">
                <div className="footer-icon">
                    <Twiter />
                </div>
                <div className="footer-icon">
                    <Facebook />
                </div>
                <div className="footer-icon">
                    <Telegram/>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;