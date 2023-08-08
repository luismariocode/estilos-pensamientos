import { motion } from "framer-motion"
import { useSelector } from "react-redux";
//Data
import data from "../../server";
const dataForm = data["data"];
const entryNombre = dataForm["entryNombre"];




const Intrucciones = () => {

    const respuesta = useSelector(state => state.respuestas.find(item => item.idPregunta === entryNombre)?.valorRespuesta);


   
    const getPrimerNombre = (nombreCompleto) => {
      if(nombreCompleto){
          const nombres = nombreCompleto.split(" "); // Dividimos el nombre completo en palabras
          return nombres[0]; // Retornamos el primer nombre
      }else{
          return "";
      }

    };
  
    const primerNombre = getPrimerNombre(respuesta);


    return (
      <div className="flex justify-center items-center h-auto  ">
        <motion.div
          initial={{ opacity: 0, y: -100, x: -1, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex  items-center h-auto w-11/12 mt-[-5%] p-6 rounded border-2 shadow bg-light border-secondary md:w-6/12 "
        >
          <div className="text-justify">
            <div className="flex justify-between mb-2">
              <p className="font-bold tracking-widest text-secondary	text-primary-dark">
                INSTRUCCIONES
              </p>
            </div>

            <p className="font-medium text-secondary">
              {primerNombre} en cada situación tendrás que dividir
              <strong>&nbsp;5 puntos entre 4 opciones</strong>, recuerda que la que
              tenga más puntos es la opción que más va contigo.
              <br />
            </p>


          

          </div>
            
          
        </motion.div>

      

      </div>
    );
}

export default Intrucciones;