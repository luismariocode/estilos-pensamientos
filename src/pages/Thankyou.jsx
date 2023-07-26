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
            sectionHero={<HeroImage svgImage={Image} heightSm={14} heightMd={14}/>}
            sectionContent={<ContentThankyou />}
        />
    </div>
    );
}


export default Thankyou;