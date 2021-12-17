import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [ searchValue, setSearchValue ] = React.useState('');
      const [ openModal, setOpenModal ] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;  
      
      let searchedTodos = [];
      
      if(searchValue.length < 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      };
    
    


      const addTodo = (text) => {
        const newTodo = [...todos];
        newTodo.push({
          completed: false,
          text,
        });
        saveTodos(newTodo);
      }


      const completedTodo = ( numero ) => {
        const newTodos = [...todos];
        if (newTodos[numero].completed === true) {
          newTodos[numero].completed = false;
          saveTodos(newTodos);
        } else {
          newTodos[numero].completed = true;
          saveTodos(newTodos);
        }
      };
    
      const deleteTodo = ( numero ) => {
        const newTodos = [...todos];
        newTodos.splice(numero, 1);
        saveTodos(newTodos);
      };  

    return (    
        <TodoContext.Provider value ={{
            loading,
            error,
            totalTodos,
            completedTodos,
            setSearchValue,
            searchedTodos,
            completedTodo ,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            todos,
        }}>
            {props.children}
        </TodoContext.Provider>
    )    
}

export { TodoContext, TodoProvider };