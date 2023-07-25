import React from "react";
import Layout from "../components/Layout";

//Hero
import HeroImage from "../components/HeroImage";
import Image from "../assets/validacion.svg";

//Contenido de home
import ContentValidacion from "../sections/ContentValidacion";


const Validacion = () => {

    return (
        <div className="min-h-screen">
        <Layout 
            gridLayout={2}
            heightLayout="screen"
            sectionHero={<HeroImage svgImage={Image} heightSm={16} heightMd={16}/>}
            sectionContent={<ContentValidacion />}
        />
    </div>
    );
}


export default Validacion;