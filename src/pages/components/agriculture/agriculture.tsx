import { ReactComponent as Line } from "../../../assets/Line 1.svg"
import  group from "../../../assets/Group 35.png"
import "./agriculture.css"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

interface AgricultureProps {}
 
const Agriculture: React.FC<AgricultureProps> = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return ( 
        <div className="agriculture_wrapper" >
            <div className="agriculture-left" data-aos="fade-right">
                <h3 className="agriculture-h3">Сельское хозяйство</h3>
                <Line />
                <p className="agriculture-text">Выращивание хлопка, зерновых культур (пшеница, рис), картофель, выращивание бобовых и масляных (маш, соя), кормовые культуры, выращивание прочих не многолетних культур, растение индигоферы, получение коконов, животноводство, рыбное хозяйство</p>
            </div>
            <div className="agriculture-right" data-aos="fade-left">
                <img src={group} className="image-hover" alt="" />
            </div>
        </div>
    );
}
 
export default Agriculture;