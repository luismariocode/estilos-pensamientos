import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateInputValue } from '../../app/actions.js';

const Opcion = (props) => {
  const inputValue = useSelector((state) => state.inputs[props.name]);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);

    if (!isNaN(value) && value >= 0 && value <= props.availablePoints) {
      dispatch(updateInputValue(props.name, value));
    } else {
      dispatch(updateInputValue(props.name, ''));
    }
  };

  return (
    <div className="flex border border-gray min-w-[350px] justify-between shadow-md rounded p-7 items-start my-2 w-full md:w-10/12">
      <div className="flex flex-col justify-center">
        <label className="w-full rounded text-left text-dark font-medium mr-2">
          {props.text}
        </label>
      </div>
      <div className="h-full mt-1">
        <input
          name={props.name}
          value={inputValue}
          onChange={handleInputChange}
          type="number"
          className="w-10 h-10 cursor-pointer md:ml-10 text-2xl font-bold text-sucess border-2 border-sucess bg-gray-light text-center rounded focus:appearance-none"
        />
      </div>
    </div>
  );
};

Opcion.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  availablePoints: PropTypes.number.isRequired, // Agregar availablePoints como una prop requerida
};

export default Opcion;





// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateInputValue } from '../../app/actions.js';

// const Opcion = (props) => {
//   const inputValue = useSelector((state) => state.inputs[props.name]);
//   const distributedPoints = useSelector((state) => state.distributedPoints);
//   const dispatch = useDispatch();

//   const handleInputChange = (event) => {
//     // Obtener el valor del input y asegurarse de que sea un número válido
//     const value = parseInt(event.target.value);

//     // Verificar si el valor es un número válido y está dentro del rango 0-5
//     if (!isNaN(value) && value >= 0 && value <= 5) {
//       // Verificar si el usuario tiene suficientes puntos disponibles para asignar
//       if (distributedPoints + (value - inputValue) <= 5) {
//         // Si el valor es válido y no excede los puntos disponibles, actualizar el estado en Redux
//         dispatch(updateInputValue(props.name, value));
//       } else {
//         // Si el valor excede los puntos disponibles, asignar el máximo posible sin exceder 5 puntos
//         const maxAllowedValue = 5 - distributedPoints + inputValue;
//         dispatch(updateInputValue(props.name, maxAllowedValue));
//       }
//     } else {
//       // Si el valor no es válido, vaciar el input
//       dispatch(updateInputValue(props.name, ''));
//     }
//   };

//   return (
//     <div className="flex border border-gray min-w-[300px] justify-between shadow-md rounded p-7 items-start my-2 w-full md:w-8/12">
//       <div className="flex flex-col justify-center">
//         <label className="w-full rounded text-left text-dark font-medium ml-2">
//           {props.text}
//         </label>
//       </div>
//       <div className="h-full mt-1">
//         <input
//           name={props.name}
//           value={inputValue}
//           onChange={handleInputChange}
//           type="number"
//           className="w-10 h-10 cursor-pointer md:ml-10 text-2xl font-bold text-sucess border-2 border-sucess bg-gray-light text-center rounded focus:appearance-none"
//         />
//       </div>
//     </div>
//   );
// };

// Opcion.propTypes = {
//   text: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

// export default Opcion;



// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateInputValue } from '../../app/actions.js';

// const Opcion = (props) => {
//   const inputValue = useSelector((state) => state.inputs[props.name]);
//   const dispatch = useDispatch();

//   const handleInputChange = (event) => {
//     // Obtener el valor del input y asegurarse de que sea un número válido
//     const value = parseInt(event.target.value);

//     // Verificar si el valor es un número y está dentro del rango 0-5
//     if (!isNaN(value) && value >= 0 && value <= 5) {
//       // Si el valor es válido, actualizar el estado en Redux
//       dispatch(updateInputValue(props.name, value));
//     } else {
//       // Si el valor no es válido, vaciar el input
//       dispatch(updateInputValue(props.name, ''));
//     }
//   };

//   return (
//     <div className="flex border border-gray min-w-[300px] justify-between shadow-md rounded p-7 items-start my-2 w-full md:w-8/12">
//       <div className="flex flex-col justify-center">
//         <label className="w-full rounded text-left text-dark font-medium ml-2">
//           {props.text}
//         </label>
//       </div>
//       <div className="h-full mt-1">
//         <input
//           name={props.name}
//           value={inputValue}
//           onChange={handleInputChange}
//           type="number"
//           className="w-10 h-10 cursor-pointer md:ml-10 text-2xl font-bold text-sucess border-2 border-sucess bg-gray-light text-center rounded focus:appearance-none"
//         />
//       </div>
//     </div>
//   );
// };

// Opcion.propTypes = {
//   text: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

// export default Opcion;









// // // import PropTypes from 'prop-types';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { updateInputValue } from '../../app/actions.js';

// // // const Opcion = (props) => {
// // //   const inputValue = useSelector((state) => state.inputs[props.name]);
// // //   const dispatch = useDispatch();

// // //   const handleInputChange = (event) => {
// // //     // Obtener el valor del input y asegurarse de que sea un número válido
// // //     const value = parseInt(event.target.value);

// // //     // Verificar si el valor es un número y está dentro del rango 0-5
// // //     if (!isNaN(value) && value >= 0 && value <= 5) {
// // //       // Si el valor es válido, actualizar el estado en Redux
// // //       dispatch(updateInputValue(props.name, value));
// // //     } else {
// // //       // Si el valor no es válido, vaciar el input
// // //       dispatch(updateInputValue(props.name, ''));
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex border border-gray min-w-[300px] justify-between shadow-md rounded p-7 items-start my-2 w-full md:w-8/12">
// // //       <div className="flex flex-col justify-center">
// // //         <label className="w-full rounded text-left text-dark font-medium ml-2">
// // //           {props.text}
// // //         </label>
// // //       </div>
// // //       <div className="h-full mt-1">
// // //         <input
// // //           name={props.name}
// // //           value={inputValue}
// // //           onChange={handleInputChange}
// // //           type="number"
// // //           className="w-10 h-10 cursor-pointer md:ml-10 text-2xl font-bold text-sucess border-2 border-sucess bg-gray-light text-center rounded focus:appearance-none"
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // Opcion.propTypes = {
// // //   text: PropTypes.string.isRequired,
// // //   name: PropTypes.string.isRequired,
// // //   value: PropTypes.number.isRequired,
// // // };

// // // export default Opcion;
