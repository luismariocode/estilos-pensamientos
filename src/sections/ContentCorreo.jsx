import BtnPrimary from "../components/BtnCustom";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'




const ContentCorreo = () => {

    const [correo, setNombre] = useState('');
    const navigate = useNavigate();

    const handleOnClick = () => {
        console.log("click");
        navigate("/survey") 
    };

   

    return (
        <motion.div 
                    initial={{ opacity: 0 , y: 100}}
                    animate={{ opacity: 1 , y: 0}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col text-center w-full pt-2 md:pt-10  ">
                    <div>
                        <span className="font-primary  font-bold text-secondary text-xl self-center">Continuemos</span>
                    </div>
                    <div className="flex flex-col w-full items-center md:pt-2">
                        <div className="flex flex-col items-center py-0 px-3 w-full md:w-4/12 xl:w-3/12">
                            <h2   className="text-2xl font-black  text-blue leading-none md:leading-10 font-primary self-center xl:text-3xl">
                            <label for="name">Ingresa tu Correo</label></h2>
                            <input type="email"
                                    name="correo"
                                    id="correo"
                                    placeholder="tu@correo.com"
                                    
                                    className="text-dark w-10/12 h-14 mt-5 pl-5 m-1 bg-gray-light rounded-lg font-primary "
                                    />
                        </div>
                    </div>                 
                    <BtnPrimary text="EMPEZAR TEST" onClick={handleOnClick} />
        </motion.div>
    );
};

export default ContentCorreo;