import "./company.css"
import { ReactComponent as Hamburger } from "../../../assets/hamburger.svg"
import { ReactComponent as Logo } from "../../../assets/logo.svg"
import { ReactComponent as Play } from "../../../assets/play.svg"
import group from "../../../assets/Group 39.png"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

interface CompanyProps {}
 
const Company: React.FC<CompanyProps> = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return ( 
        <div className="company_wrapper">
            <header data-aos="fade-down">
                <div className="logo-cnt">
                    <Logo className="logo" />
                </div>
                <div className="hamburger-cnt">
                    <Hamburger className="hamburger"/>
                </div>
            </header>
            <p className="title-text" data-aos="fade-right">Главная страница // <span className="title-text-sp">O Компании</span></p>
            <div className="company-item_wrapper">
                <div className="title_wrapper" data-aos="fade-right">
                    <h1 className="title">O Компании</h1>
                    <p className="text">ТСТ Cluster – крупнейший межотраслевой комплекс, объединяющий несколько отраслей экономики, направленных на производство и переработку сельскохозяйственного сырья, животноводства и рыбоводства. Получение из данного сырья готовой продукции, доводимой до конечного потребителя.</p>
                    <a href="https://www.youtube.com/watch?v=I_40JFauCFk" className="btn">Смотреть видео <Play /> </a>
                </div>
                <div className="image_wrapper image-hover" data-aos="fade-left" >
                    <img src={group} alt="" className="image-hover" />
                </div>
            </div>
        </div> 
    );
}
 
export default Company;