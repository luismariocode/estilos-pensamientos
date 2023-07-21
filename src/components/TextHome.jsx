import BtnPrimary from "./BtnPrimary";
import {motion} from "framer-motion";


const TextHome = () => {

    const handleOnClick = () => {
        console.log("click");
    };

    return (
        <motion.div 
                    initial={{ opacity: 0 , y: 100}}
                    animate={{ opacity: 1 , y: 0}}
                    transition={{ duration: 0.5, delay: 0.7 }}

                    className="flex flex-col w-full">
                    <span className="font-primary font-bold text-gray text-2xl self-center">Test</span>
                    <h1 id="home-title"  className="text-5xl font-bold leading-10 font-primary self-center xl:text-6xl">
                        Titulo de
                        <br /> Cuestionario
                    </h1>
                    <BtnPrimary text="Comenzar" onClick={handleOnClick} />
        </motion.div>
    );
};

export default TextHome;