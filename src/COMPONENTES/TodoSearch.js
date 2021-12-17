import React from "react";
import { TodoContext } from "../TodoContext";
import '../CSS/todoSearch.css';



function TodoSearch(  ) { 

  const { setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <input
      className="TodoSearh" 
      placeholder="Buscar Tarea"
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };