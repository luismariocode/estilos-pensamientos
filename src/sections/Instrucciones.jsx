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
            <div className="flex justify-between mb-2">
              <p className="font-bold tracking-widest 	text-primary-dark">
                INSTRUCCIONES
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary-dark"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <p className="font-medium text-dark">
              Hola @Nombre, en cada situación tendrás que dividir{" "}
              <strong>5 puntos entre 4 opciones</strong>, recuerda que la que
              tenga más puntos es la opción que más va contigo.
              <br />
              No hay <strong>límite de puntos</strong> por lo que una opción
              pueden tener de 0 a 5 puntos.<br/>Todas las opciones tienen que sumar 5 puntos y todas son obligatorias.
            </p>
          </div>
        </motion.div>
      </div>
    );
}

export default Intrucciones;