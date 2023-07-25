import React from "react";
import Layout from "../components/Layout";

//Hero
import HeroImage from "../components/HeroImage";
import Image from "../assets/correo.svg";

//Contenido de home
import ContentCorreo from "../sections/ContentCorreo";


const Nombre = () => {

    return (
        <div className="min-h-screen">
        <Layout 
            gridLayout={2}
            heightLayout="screen"
            sectionHero={<HeroImage svgImage={Image} heightSm={24} heightMd={28}/>}
            sectionContent={<ContentCorreo />}
        />
    </div>
    );
}


export default Nombre;