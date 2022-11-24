import "./production.css"
import group from "../../../assets/Group 36.png"
import { ReactComponent as Line } from "../../../assets/Line 1.svg"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

interface ProductionProps {}

const productionData = ["Переработка хлопка сырца", "Переработка риса", "Переработка рыбы", "Краска индиго"]

const Production: React.FC<ProductionProps> = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return ( 
        <div className="production_wrapper">
            <div className="production-letf" data-aos="fade-right">
                <img src={group} className="image-hover" alt="" />
            </div>
            <div className="production-right" data-aos="fade-left">
                <div className="production-h3">Производство</div>
                <Line />
                <div className="production-list">
                    {productionData.map((item) => 
                        <ul key={item}>
                            <li className="production-li">{item}</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default Production;