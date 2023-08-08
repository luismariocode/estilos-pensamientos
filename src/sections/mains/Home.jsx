//Librerias
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; 

//Componentes
import  { BtnCustom as ButtonPrimary , Title} from "../../components";
//State
import { useDispatch , useSelector } from 'react-redux';
import { setGeneratedId , agregarRespuesta  } from '../../app/actions.js';

//Data 
import data from "../../server"





const ContentHome = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dataForm = data['data'];
    const entryIdTestValue = dataForm['entryIdTest'];

    console.log(entryIdTestValue)

    const respuestas = useSelector(state => state.respuestas);

console.log(respuestas)

    

    //Handle del click
    const handleOnClick = () => {
        const generatedId = uuidv4(); 

        const idTest = "TEP-"+(generatedId.substring(0, 5));

        navigate("/nombre");
        dispatch(setGeneratedId(generatedId)); 
        dispatch(agregarRespuesta(entryIdTestValue, idTest)); 
    };

    return (
        <motion.div 
                    initial={{ opacity: 0 , y: 100}}
                    animate={{ opacity: 1 , y: 0}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col text-center w-full pt-2 md:pt-10">
                    <Title subtitle="Test"
                        title={"Test de" + "\n" + "cuestionario"} />
                        <ButtonPrimary text="Comenzar" onClick={handleOnClick} />
                    
                    
        </motion.div>
    );
};

export default ContentHome;


