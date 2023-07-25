import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Situacion, Opcion } from "./Elements";
import BtnPrimary from "../components/BtnCustom";

const ContentSurvey = () => {

  const navigate = useNavigate();

  const handleOnClick = () => {
      console.log("click");
      navigate("/validacion") 
  };



  return (
    <div className="flex justify-center items-center h-auto mt-3  mb-16">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col items-center self-center h-auto w-full p-6  md:w-6/12"
      >
        <Situacion numero={1} text={"Primera situación hipotética"} />
        <div className="h-auto w-full mt-4 ">
          <Opcion
            name={"opcion1"}
            value={1}
            text={
              "Soy la primer opción, en esto caso haría esto. Soy la primer opción, en esto caso haría esto"
            }
            label={"Estoy totalmente de acuerdo."}
          />
          <Opcion
            name={"opcion1"}
            value={1}
            text={
              "Soy la primer opción, en esto caso haría esto. Soy la primer opción, en esto caso haría esto"
            }
            label={"Estoy totalmente de acuerdo."}
          />
          <Opcion
            name={"opcion1"}
            value={1}
            text={
              "Soy la primer opción, en esto caso haría esto. Soy la primer opción, en esto caso haría esto"
            }
            label={"Estoy totalmente de acuerdo."}
          />
          <Opcion
            name={"opcion1"}
            value={1}
            text={
              "Soy la primer opción, en esto caso haría esto. Soy la primer opción, en esto caso haría esto"
            }
            label={"Estoy totalmente de acuerdo."}
          />
        </div>
        
        <div className="flex justify-end  mb-5 w-full">
            <div className="text-sucess rounded-lg border-2 py-2 px-2 bg-secondary  border-primary-dark font-bold text-body">{2}&nbsp;puntos</div>
        </div>


        <div className="flex justify-center md:justify-end mb-24 w-full">
            <BtnPrimary text={"Validar Test"} onClick={handleOnClick}></BtnPrimary>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentSurvey;
