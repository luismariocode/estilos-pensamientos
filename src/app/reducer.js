const initialState = {
    generatedId: null,
    respuestas: [],
    currentQuestion: 0,
    inputs: {},
    distributedPoints: 0,
    availablePoints: 5,
    pointsPerQuestion: [], // Arreglo para almacenar los puntos por pregunta

};
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_GENERATED_ID':
        return {
          ...state,
          generatedId: action.payload,
        };
      case 'AGREGAR_RESPUESTA':
        return {
          ...state,
          respuestas: [...state.respuestas, action.payload],
        };
        case 'UPDATE_INPUT_VALUE':

          var newInputs = {
            ...state.inputs,
            [action.payload.name]: action.payload.value,
          };

          var newDistributedPoints = Object.values(newInputs).reduce((total, value) => total + (value || 0), 0);

          return {
            ...state,
            inputs: {
              ...state.inputs,
              [action.payload.name]: action.payload.value,
            },
            distributedPoints: newDistributedPoints,
          };
          case 'NEXT_QUESTION':
            return {
              ...state,
              currentQuestion: state.currentQuestion + 1,
              distributedPoints: 0, 
              availablePoints:5// Reiniciar los puntos distribuidos al pasar a la siguiente pregunta
            };
          
            case 'ASSIGN_POINTS_PER_QUESTION':
      return {
        ...state,
        pointsPerQuestion: [...state.pointsPerQuestion, action.payload],
      };

          case 'RESET_POINTS':
            return {
              ...state,
              distributedPoints: 0,
            };
          default:
            return state;
      }
  };
  
  export default reducer;