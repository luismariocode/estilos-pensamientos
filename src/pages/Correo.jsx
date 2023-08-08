
import {Layout} from "../components";
//Hero
import {HeroImage} from "../components";
import Image from "../assets/correo.svg";

//Contenido de Correo
import {Correo as Main} from "../sections/mains";


const Nombre = () => {
    return (
        <div className="min-h-screen">
        <Layout 
            gridLayout={"2"}
            heightLayout="screen"
            sectionHero={<HeroImage svgImage={Image} heightSm={"24"} heightMd={"28"}/>}
            sectionContent={<Main />}
        />
    </div>
    );
}


export default Nombre;