import {BtnCustom as ButtonPrimary} from "../../components";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";




const ContentValidacion = () => {

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
                            <h2   className="text-2xl font-bold  text-blue leading-none md:leading-10 font-primary self-center xl:text-3xl">
                            Para terminar solo es necesario enviar tus respuestas.
                            </h2>
                        </div>
                    </div>                 
                    <ButtonPrimary text="ENVIAR RESPUESTAS" onClick={handleOnClick} />
        </motion.div>
    );
};

export default ContentValidacion;