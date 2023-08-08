export const setGeneratedId = (id) => {
  return {
    type: "SET_GENERATED_ID",
    payload: id,
  };
};


export const agregarRespuesta = (idPregunta, valorRespuesta) => {
    return {
      type: 'AGREGAR_RESPUESTA',
      payload: { idPregunta, valorRespuesta },
    };
  };

  export const nextQuestion = () => {
    return {
      type: 'NEXT_QUESTION',
    };

  }

  export const updateInputValue = (name, value) => {
    return {
      type: "UPDATE_INPUT_VALUE",
      payload: {
        name,
        value,
      },
    };
  };


  export const assignPointsPerQuestion = (points) => ({
    type: 'ASSIGN_POINTS_PER_QUESTION',
    payload: points,
  });
  