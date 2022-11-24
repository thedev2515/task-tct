import "./operating-enterprises.css"
import { ReactComponent as Line } from "../../../assets/Line 1.svg"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

interface OperatingEnterprisesProps {}
 
const data_1 = [
    {
        title: "OOO “TCT AGRO CLUSTER”"
    },
    {
        title: "OOO “TCT FISH CLUSTER”"
    },
    {
        title: "OOO “TCT RICE”"
    },
    {
        title: "OOO “TASHKENT COTTON TEXTILE”"
    },
    {
        title: "OOO “TCT ESSEN”"
    },
]
const data_2 = [
    {
        title: "OOO “TCT SEED AND GRAIN”"
    },
    {
        title: "OOO “TCT TRADE AND SUPPLY”"
    },
    {
        title: "OOO “TCT LOGISTIC”"
    },
    {
        title: "OOO “TCT TRADE AND SUPPLY”"
    },
    {
        title: "OOO “TCT TRADE AND SUPPLY”"
    },
]



const OperatingEnterprises: React.FC<OperatingEnterprisesProps> = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    })
    return ( 
        <div className="operating-enterprises_wrapper">
            <div data-aos="fade-left">
                <h1 className="title-2">Предприятия, работающие в ООО “TCT CLUSTER”</h1>
                <Line />
            </div>
            <div className="operating-enterprises-cnt">
                <div className="left-content" data-aos="fade-right">
                    {data_1.map((item, index) => 
                        <ul key={index} className="operating-enterprises-flex">
                            <li className="operating-enterprises-li">{item.title}</li>
                        </ul>
                    )}
                </div>
                <div className="right-content" data-aos="fade-left">
                    {data_2.map((item, index) => 
                        <ul key={index} className="operating-enterprises-flex">
                            <li className="operating-enterprises-li">{item.title}</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default OperatingEnterprises;