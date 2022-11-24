
import { ReactComponent as Line } from "../../../../assets/Line 1.svg"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import CountUp from "react-countup"

interface SubmitedProps {}

const Submited: React.FC<SubmitedProps> = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return ( 
        <div className="cultivation-of-crops" data-aos='fade-up'>
            <div data-aos='fade-left'>
                <h3 className="title-2">Другие статистические данные</h3>
                <Line />
            </div>
            <table className="table table-striped">
                <thead className="thead-bg">
                    <tr>
                        <th scope="col" className="text-white">No</th>
                        <th scope="col" className="text-white">Показатели</th>
                        <th scope="col" className="text-white">Ед.изм.</th>
                        <th scope="col" className="text-white">2018</th>
                        <th scope="col" className="text-white">2019</th>
                        <th scope="col" className="text-white">2020</th>
                        <th scope="col" className="text-white">2021</th>
                        <th scope="col" className="text-white">2022</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <th scope="row">1</th>
                        <td>Механизация</td>
                        <td>млн.сум</td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Строительство</td>
                        <td>млн.сум</td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Общественное питание</td>
                        <td>млн.сум</td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Услуги логистики</td>
                        <td>млн.сум</td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Туристические услуги</td>
                        <td>млн.сум</td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                        <td><CountUp start={1000} end={11461} duration={5} delay={0} /></td>
                    </tr>
                </tbody>
                </table>
        </div>
    );
}
 
export default Submited;