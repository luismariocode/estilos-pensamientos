import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion } from '../../app/actions.js';
import { StatementText, Opcion, InfoPuntos } from '../../components/elements';
import { BtnCustom as ButtonPrimary } from '../../components';
import data from '../../server';

const statements = data.data.statements;

const ContentSurvey = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

    // Obtener datos específicos del estado de Redux utilizando selectores
    const currentQuestionIndex = useSelector((state) => state.currentQuestion);
    const distributedPoints = useSelector((state) => state.distributedPoints);
    const availablePoints =  5 - distributedPoints;
  


  const handleOnClick = () => {
    if (currentQuestionIndex === statements.length - 1) {
      console.log('Redireccionar a la página de validación');
      navigate('/validacion');
    } else {
      dispatch(nextQuestion());
    }
  };

  const currentStatement = statements[currentQuestionIndex];

  console.log(currentStatement.idStatement);

  const allPointsAssigned = availablePoints === 0;

  console.log('allPointsAssigned:', allPointsAssigned);



  return (
    <div className="flex justify-center items-center h-auto mt-3  mb-16">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col items-center self-center h-auto w-full p-6  md:w-6/12"
      >
        <InfoPuntos />
        <StatementText numero={currentStatement.idStatement} text={currentStatement.statement} />
        {currentStatement.options.map((option) => (
          <Opcion
            key={option.idOption}
            name={option.entrieOption}
            text={option.descriptionOption}
            availablePoints={option.puntosDisponibles} // Pasar los puntos disponibles al componente Opcion

          />
        ))}
        <div className='w-8/12 h-auto justify-end flex align-middle mt-3'>
          <div className='w-[200px] h-[30px]  text-primary  font-medium rounded-full text-center'>Puntos Restantes: {5 - distributedPoints}</div>
        </div>
        <div className="flex justify-center mb-24 w-full md:w-10/12">
        <ButtonPrimary text={currentQuestionIndex === statements.length - 1 ? "Validar" : "Siguiente"} onClick={handleOnClick} disabled={!allPointsAssigned} />
        </div>
        {/* Mostrar los puntos restantes */}
        
      </motion.div>
    </div>
  );
};

export default ContentSurvey;