import {Layout} from "../components";

//Instrucciones
import {Instrucciones} from "../components/elements";

//Contenido de Survey
import {Survey as Main} from "../sections/mains";


const Nombre = () => {
    return (
        <div className="min-h-auto">
        <Layout 
            gridLayout={'[auto, auto]'}
            heightLayout="auto"
            sectionHero={<Instrucciones />}
            sectionContent={<Main />}
        />
    </div>
    );
}


export default Nombre;