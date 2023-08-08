//Animacion
import { motion } from "framer-motion";

//Fomulario Formik y validacion
import { useFormik } from "formik";
import * as Yup from "yup";

//Rutas
import { useNavigate } from "react-router-dom";

//Componentes
import { BtnCustom as ButtonPrimary } from "../../components";

//Data
import data from "../../server"

//State
import { useDispatch , useSelector} from 'react-redux';
import { agregarRespuesta } from '../../app/actions.js';

const dataForm = data['data'];
const entryNombre = dataForm["entryNombre"];


const schemaNombre = Yup.object().shape({
  [entryNombre]: Yup.string()
    .min(2, "¡Ups! Verifica tu nombre.")
    .max(50, "¡Ups! Verifica tu nombre.")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Caracteres no validos.')
    .required("Campo obligatorio."),
});

const ContentNombre = () => {

  
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors} = useFormik({
    initialValues: {
      [entryNombre]: "",
    },

    onChange: (values) => {
      console.log(values);
    },

    onSubmit: (values) => {
      console.log(values);

      if (values[entryNombre] === "") {
        console.log("error")
      } else {
        dispatch(agregarRespuesta(entryNombre, values[entryNombre]));
        navigate('/correo');
      }
    },
    validationSchema: schemaNombre,

  });

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    const uppercaseValue = value.toUpperCase(); // Convertimos el texto a mayúsculas
    handleChange({ target: { name, value: uppercaseValue } }); // Establecemos el valor en mayúsculas en el estado de Formik
  };


  const respuestas = useSelector(state => state.respuestas);

  console.log(respuestas)



  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="flex flex-col text-center w-full pt-2 md:pt-10">
      <div className="flex flex-col w-full items-center md:pt-2">
        <div className="flex flex-col items-center py-0 px-3 w-full max-w-[500px]">
          <div className="w-full text-sucess-dark font-secondary text-md">¡Comencemos!</div>
          <form onSubmit={handleSubmit} className="min-w-screen" >
            <h2 className="text-2xl font-bold text-blue leading-none md:leading-10 font-primary self-center xl:text-3xl">
              <label htmlFor={entryNombre}>¿Cuál es tu nombre?</label>
            </h2>
            <input type="text"
              pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
              name={entryNombre}
              id={entryNombre}
              placeholder="Nombre completo"
              onChange={handleTextChange}
              value={values[entryNombre]} // Utilizamos el valor de entryNombre como clave para obtener el valor
              className="text-dark w-full w-min-[275px] h-14 mt-5 pl-5 m-1 bg-gray-light rounded-lg font-secondary font-bold "
            />
            <div className="w-min-[275px] w-full h-5">
            {errors[entryNombre] ? (
              <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.2}}
                className="text-red  py-1  w-full  text-right text-base ">
                  {errors[entryNombre]}
                </motion.div>
            ) : null}
            </div>
            <ButtonPrimary text="SIGUIENTE" onClick={()=>{return true}} />            
          </form>
        </div>
      </div>

    </motion.div>
  );
};

export default ContentNombre;