import Agriculture from "./components/agriculture";
import AgricultureTwo from "./components/agriculture-two";
import Company from "./components/company";
import Footer from "./components/footer";
import NewProjects from "./components/new-projects";
import OperatingEnterprises from "./components/operating-enterprises";
import Production from "./components/production";
import CultivationOfCrops from "./components/tables/cultivation-of-crops";
import OtherStatistics from "./components/tables/other-statistics";
import Submitted from "./components/tables/submitted";
import "./container.css"

interface ContainerProps {}
 
const Container: React.FC<ContainerProps> = () => {
    return (
        <div className="container_wrapper">
            <Company />
            <OperatingEnterprises />
            <Agriculture />
            <Production />
            <AgricultureTwo />
            <NewProjects />
            <CultivationOfCrops />
            <Submitted />
            <OtherStatistics />
            <Footer />
        </div>
    );
}
 
export default Container;