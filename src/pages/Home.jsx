import React from "react";
import ImgHome from "../components/ImgHome";
import TextHome from "../components/TextHome";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <main className="home-main p-6 my-0 min-h-screen grid items-center grid-rows-3 gap-0 min-w-min  ">
            <section className="flex justify-center">
                <ImgHome />
            </section>
            <section className="flex flex-col self-start justify-start pt-0  text-center items-center">
                <TextHome />
            </section>
            <section className="flex items-end h-full">
                <Footer />
            </section>
        </main>
    );
};

export default Home;
