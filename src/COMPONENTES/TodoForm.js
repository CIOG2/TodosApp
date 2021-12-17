import React from 'react';
import { TodoContext } from '../TodoContext';
import { estilosButton } from '../COMPONENTES/CreateTodoButton';
import '../CSS/todoForm.css';
import Swal from 'sweetalert2'


function TodoForm({ setOpenModal, todos }) {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const { addTodo } = React.useContext(TodoContext);
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!!newTodoValue) {
            let todoTexto = todos.map(todo => todo.text.toLowerCase());
                if (todoTexto.includes(newTodoValue.toLowerCase())) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Ese tarea ya existe',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                      });
                } else {
                    addTodo(newTodoValue);
                    setNewTodoValue('');
                    estilosButton(setOpenModal)
                }
            
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No se puede agregar una tarea vacía',
                icon: 'error',
                confirmButtonText: 'Okay'
              });
        }
    }

    return (
        <div className='ModalContainer'>
            <form className='ModalForm'>
                <label>
                    Escribe tu nuevo todo:
                </label>
                <textarea
                 value={newTodoValue}
                 onChange={onChange}
                />
            </form>
            <button 
                className='ModalButton'
                type="button"
                onClick={onSubmit}
            >
                Agregar Tarea
            </button>
        </div>
    )  
}

export { TodoForm };