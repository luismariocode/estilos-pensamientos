import React from "react";
import ImageHome from "../assets/home.svg";
import BtnPrimary from "../components/BtnPrimary";
import Footer from "../components/Footer";

const Home = () => {
    const handleOnClick = () => {
        console.log("click");
    };

    return (
        <main className="home-main p-6 my-0 min-h-screen grid items-center grid-rows-3 gap-0  ">
            <section className=" flex  justify-center">
                <img src={ImageHome} alt="" />
            </section>
            <section className="flex flex-col self-start justify-start pt-0 text-left sm:text-center sm:items-center">
                <span className="font-primary font-medium">Test</span>
                <h1 className="text-4xl	text-primary font-bold leading-8 font-primary">
                    Titulo de
                    <br /> Cuestionario
                </h1>
                <BtnPrimary text="Comenzar" onClick={handleOnClick} />
            </section>
            <Footer />
            
            
        </main>
    );
};

export default Home;
