import React from "react";
import Layout from "../components/Layout";

//Hero
import HeroImage from "../components/HeroImage";
import Image from "../assets/home.svg";

//Contenido de home
import ContentHome from "../sections/ContentHome";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Layout 
                gridLayout={2}
                heightLayout="screen"
                sectionHero={<HeroImage svgImage={Image} heightSm={44} heightMd={60} />}
                sectionContent={<ContentHome />}
            />
        </div>
    );
};

export default Home;
