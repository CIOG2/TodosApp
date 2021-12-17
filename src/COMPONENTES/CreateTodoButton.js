import React from "react";
import '../CSS/todoButton.css'

let estilos = {};

function estilosButton(setOpenModal) {
  setOpenModal((prev) => {
    prev = !prev;
    if (prev) {
      estilos = {
        backgroundColor: "red",
        color: "white",
        transform: "rotate(45deg)"
      };
    } else {
      estilos = {
        backgroundColor: "white",
        color: "black",
        transform: "rotate(0deg)"
      };
    }
    return prev;
  });  
}



function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    estilosButton(setOpenModal);
  }

  return (
    <button
      className="TodoButton"
      onClick={onClickButton}
      style={estilos}
    >
      +
    </button>
  );
}

export { CreateTodoButton , estilosButton };