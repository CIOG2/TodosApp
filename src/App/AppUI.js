import React from 'react';
import { TodoContext } from "../TodoContext"; 
import { TodoCounter } from "../COMPONENTES/TodoCounter.js";
import { TodoSearch } from "../COMPONENTES/TodoSearch";
import { TodoList } from "../COMPONENTES/TodoList";
import { TodoItem } from "../COMPONENTES/TodoItem";
import { TodoForm } from '../COMPONENTES/TodoForm.js';
import { Skeletons } from '../COMPONENTES/Skeletons.js';
import {  Modal } from "../Modal";
import { CreateTodoButton } from "../COMPONENTES/CreateTodoButton";



function AppUI() {

 const { 
  loading,
  error,
  searchedTodos,
  completedTodo,
  deleteTodo,
  openModal,
  setOpenModal, 
  todos,
  } = React.useContext(TodoContext);


  return (
    <React.Fragment>
    <TodoCounter />
      <TodoSearch />
      
      <TodoList>
          {error &&  <p>Hubo un error :c</p>}
          {loading && <Skeletons/>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}
          

          {searchedTodos.map( (todo,posicion) => (
            <TodoItem 
              key = { todo.text } 
              text = { todo.text }
              status = { todo.completed } 
              setStatus = { completedTodo }
              setTodos = { posicion }
              deleteTodo = { deleteTodo }
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm 
              setOpenModal = { setOpenModal}
              todos = { todos }
            />
          </Modal>
        )}


      <CreateTodoButton
        setOpenModal = { setOpenModal }
      />
    </React.Fragment>
)
}

export { AppUI }; 