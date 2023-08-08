import { motion } from "framer-motion";

const InfoPuntos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, x: -1, scale: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="flex  items-center h-auto w-full bg-light  md:w-full mt-2 mb-5"
    >
      
        <div className="flex flex-wrap w-full  md:items-center text-center justify-left md:justify-center">
          <div className="m-1 rounded-full w-full  lg:w-4/12 bg-light text-primary font-medium border-2  border-primary p-1 ">&#128515; 5: ¡Totalmente de acuerdo!</div>
          <div className="m-1 rounded-full w-full  lg:w-4/12  bg-light text-primary font-medium border-2 border-primary p-1 ">&#128516; 4: Estoy de acuerdo</div>
          <div className="m-1 rounded-full w-full  lg:w-4/12 bg-light text-primary font-medium border-2 border-primary p-1 ">&#128528; 3: Está bien, puede ser.</div>
          <div className="m-1 rounded-full w-full  lg:w-4/12 bg-light text-primary font-medium border-2 border-primary p-1 ">&#128533; 2: Me es indiferente.</div>
          <div className="m-1 rounded-full w-full  lg:w-4/12 bg-light text-primary font-medium border-2 border-primary p-1 ">&#128542; 1: No estoy de acuerdo.</div>
          <div className="m-1 rounded-full w-full  lg:w-5/12 bg-light text-primary font-medium border-2 border-primary p-1 ">&#128532; 0: ¡Totalmente en desacuerdo!</div>
        </div>
      
    </motion.div>
  );
};

export default InfoPuntos;