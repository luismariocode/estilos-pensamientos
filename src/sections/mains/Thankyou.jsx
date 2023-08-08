import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MdHome } from 'react-icons/md';


const ContentValidacion = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    console.log("click");
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="flex flex-col text-center w-full pt-2 md:pt-10 "
    >
      <div className="flex flex-col w-full items-center md:pt-2">
        <div className="flex flex-col items-center py-0 px-3 w-full md:w-4/12 xl:w-3/12">
          <h2 className="text-2xl font-bold  text-blue leading-none md:leading-10 font-primary self-center xl:text-3xl">
            Gracias por tu tiempo, tus respuestas han sido enviadas.
          </h2>

          <h3 className="text-2xl mt-10">Folio del test:</h3>
        </div>
      </div>
      <button className="flex flex-row w-[300px] items-center self-center shadow-md	 py-3 rounded justify-center mt-10 font-medium cursor-pointer bg-primary text-white text-xl hover:bg-primary-light" 
      onClick={handleGoToHome}
    >
      <MdHome style={{ marginRight: '5px' }} />
      Ir al Home
    </button>
    </motion.div>
  );
};

export default ContentValidacion;
