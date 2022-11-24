import './new-projects.css'
import group from "../../../assets/Group 36 (2).png"
import { ReactComponent as Line } from "../../../assets/Line 1.svg"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

interface NewProjectsProps {}
 
const newProjectsData = [
    'Глубокая переработка хлопкового волокна',
    'Производство растительных масел (хлопковое)' , 
    'Производство готовой (рыбной) продукции', 
    'Производство молочных продукции', 
    "Расширение системы капельного орошения", 
    'Проекты по ирригации и мелиорации '
]

const NewProjects: React.FC<NewProjectsProps> = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return ( 
        <div className="production_wrapper">
            <div className="production-letf" data-aos="fade-right">
                <img src={group} className="image-hover" alt="" />
            </div>
            <div className="production-list new-projects-list" data-aos="fade-left">
                <h3 className="production-h3">Новые проекты</h3>
                <Line />
                {newProjectsData.map((item) => 
                    <ul key={item}>
                        <li className="production-li">{item}</li>
                    </ul>
                )}
            </div>
        </div>
    );
}
 
export default NewProjects;