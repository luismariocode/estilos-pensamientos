import { motion } from "framer-motion"

const Intrucciones = ({}) => {
    return (
      <div className="flex justify-center items-center h-auto my-3 ">
        <motion.div
          initial={{ opacity: 0, y: -100, x: -1, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex  items-center h-auto w-11/12 p-6 rounded border-2 shadow bg-light border-secondary md:w-6/12 "
        >
          <div className="text-justify">
            <details className=" text-justify">
              <summary className="font-bold text-sucess tracking-widest cursor-pointer md:mb-2 ">INDICACIONES</summary>
              <p className="font-medium text-blue">Hola @Nombre, en cada situación, divide 5 puntos entre 4 opciones. La opción con más puntos es la que más va contigo. No hay límite de puntos, pueden ser de 0 a 5. Todas las opciones suman 5 puntos y son obligatorias. ¡Elige sabiamente!</p>
            </details>

            <details className="mt-4 text-justify">
              <summary className="font-bold text-sucess tracking-widest cursor-pointer md:mb-2 ">
                VALOR DE LOS PUNTOS
              </summary>
              <p className="font-medium text-blue">0: No estoy de acuerdo.</p>
              <p className="font-medium text-blue">
                1: No me termina de convencer.
              </p>
              <p className="font-medium text-blue">2: Podría considerarlo.</p>
              <p className="font-medium text-blue">3: Está bien, supongo.</p>
              <p className="font-medium text-blue">4: Me identifico.</p>
              <p className="font-medium text-blue">
                5: ¡Totalmente de acuerdo!
              </p>
            </details>
          </div>
        </motion.div>
      </div>
    );
}

export default Intrucciones;