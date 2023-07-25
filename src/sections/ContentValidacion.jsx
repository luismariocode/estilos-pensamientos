
import BtnPrimary from "../components/BtnCustom";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'




const ContentValidacion = () => {

    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const handleOnClick = () => {
        console.log("click");
        navigate("/thankyou") 
    };

    

    return (
        <motion.div 
                    initial={{ opacity: 0 , y: 100}}
                    animate={{ opacity: 1 , y: 0}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col text-center w-full pt-2 md:pt-10 ">

                    <div className="flex flex-col w-full items-center md:pt-2">
                        <div className="flex flex-col items-center py-0 px-3 w-full md:w-4/12 xl:w-3/12">
                            <h2   className="text-2xl font-black  text-blue leading-none md:leading-10 font-primary self-center xl:text-3xl">
                            Para terminar solo es necesario enviar tus respuestas.
                            </h2>
                        </div>
                    </div>                 
                    <BtnPrimary text="ENVIAR RESPUESTAS" onClick={handleOnClick} />
        </motion.div>
    );
};

export default ContentValidacion;