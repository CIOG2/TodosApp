import React from "react";
import { TodoContext } from "../TodoContext";
import '../CSS/todoCounter.css';

function TodoCounter() {

  const { completedTodos, totalTodos,} = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">Has completado { completedTodos } de { totalTodos } TODOs</h2>
  );
}


export { TodoCounter };















//ESTILOS DIRECTOS DE CSS
// const estilos = {
//   color: 'red',
//   backgroundColor: 'yellow',

// };

// function TodoCounter() {
//   return (
//     <h2 style={ estilos }>Has completado 2 de 3 TODOs</h2>
//   );
// }