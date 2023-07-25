import React from "react";
import Layout from "../components/Layout";

//Hero
import HeroImage from "../components/HeroImage";
import Image from "../assets/thankyou.svg";

//Contenido de home
import ContentThankyou from "../sections/ContentThankyou";


const Thankyou = () => {

    return (
        <div className="min-h-screen">
        <Layout 
            gridLayout={2}
            heightLayout="screen"
            sectionHero={<HeroImage svgImage={Image} heightSm={16} heightMd={16}/>}
            sectionContent={<ContentThankyou />}
        />
    </div>
    );
}


export default Thankyou;