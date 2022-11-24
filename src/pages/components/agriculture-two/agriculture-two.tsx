import "./agriculture-two.css"
import group from "../../../assets/Group 35 (1).png"
import { ReactComponent as Line } from "../../../assets/Line 1.svg"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

interface AgricultureTwoProps {}

const agricultureData = ["Услуги сельхозтехники", 'Услуги перевозки грузов', 'Услуги общественного питания', 'Строительство']
 
const AgricuTwolture: React.FC<AgricultureTwoProps> = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return ( 
        <div className="agriculture_wrapper">
            <div className="agriculture-left" data-aos="fade-right">
                <h3 className="agriculture-h3">Сельское хозяйство</h3>
                <Line />
                <div className="production-list">
                    {agricultureData.map((item) => 
                        <ul key={item}>
                            <li className="production-li">{item}</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="agriculture-right" data-aos="fade-left">
                <img src={group} className="image-hover" alt="" />
            </div>
        </div>
    );
}
 
export default AgricuTwolture;