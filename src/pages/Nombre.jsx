import React from "react";
import Layout from "../components/Layout";

//Hero
import HeroImage from "../components/HeroImage";
import Image from "../assets/nombre.svg";

//Contenido de home
import ContentNombre from "../sections/ContentNombre";


const Nombre = () => {

    return (
        <div className="min-h-screen">
        <Layout 
            gridLayout={2}
            heightLayout="screen"
            sectionHero={<HeroImage svgImage={Image} heightSm={24} heightMd={28}/>}
            sectionContent={<ContentNombre />}
        />
    </div>
    );
}


export default Nombre;