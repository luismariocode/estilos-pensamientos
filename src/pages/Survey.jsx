import React from "react";
import Layout from "../components/Layout";

//Instrucciones
import Instrucciones from "../sections/Instrucciones";

//Contenido de Survey
import ContentSurvey from "../sections/ContentSurvey";


const Nombre = () => {

    return (
        <div className="min-h-auto">
        <Layout 
            gridLayout={'[auto, auto]'}
            heightLayout="auto"
            sectionHero={<Instrucciones />}
            sectionContent={<ContentSurvey />}
        />
    </div>
    );
}


export default Nombre;