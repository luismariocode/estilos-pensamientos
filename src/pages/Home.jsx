import {Layout} from "../components";

//Hero
import {HeroImage} from "../components";
import Image from "../assets/home.svg";

//Contenido de home
import {Home as Main} from "../sections/mains";

//Component
const Home = () => {
    return (
        <div className="min-h-screen ">
            <Layout 
                gridLayout={"2"}
                heightLayout="screen"
                sectionHero={<HeroImage svgImage={Image} heightSm={"44"} heightMd={"60"} />}
                sectionContent={<Main />}
            />
        </div>
    );
};

export default Home;


