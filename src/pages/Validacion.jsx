import {Layout} from "../components";

//Hero
import {HeroImage} from "../components";
import Image from "../assets/validacion.svg";

//Contenido de home
import {Validacion as Main} from "../sections/mains";


const Validacion = () => {

    return (
        <div className="min-h-screen">
        <Layout 
            gridLayout={2}
            heightLayout="screen"
<<<<<<< HEAD
            sectionHero={<HeroImage svgImage={Image} heightSm={12} heightMd={12}/>}
            sectionContent={<ContentValidacion />}
=======
            sectionHero={<HeroImage svgImage={Image} heightSm={"16"} heightMd={"16"}/>}
            sectionContent={<Main />}
>>>>>>> dev
        />
    </div>
    );
}


export default Validacion;