import React from "react";
import '../CSS/todoItem.css'

function TodoItem(props) {
    const { text, setStatus, status, setTodos, deleteTodo } = props;
    let estilos;
    let estilosCheck;

    const onComplete = () => {;
        setStatus(setTodos);
        }

    const onDelete = () => {
        deleteTodo(setTodos)
    }

    if (status === true) {
        estilos = {
            backgroundColor: "#839090",
            transition: "background-color 0.5   s ease-in-out"
        } 
        estilosCheck = {
            backgroundColor: "#839090",
            transition: "color 0.5s ease-in-out"
        }
    } else {
        estilos = {
            backgroundColor: "#00fff5",
            transition: "background-color 0.5s ease-in-out"
        }
        estilosCheck = {};
    }

    return (
        <li 
            className="ItemLi">
            <span 
                className="ItemCrear"
                onClick={onComplete}
                style={estilosCheck}
            >

                ✓
            </span>
            <p className="ItemTarea"
                style={estilos}
            >
                { text }
            </p>
            <span className="ItemBorrar"
                onClick={onDelete}
            >
            
                X
            </span>
        </li>
    );
}


export { TodoItem };