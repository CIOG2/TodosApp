import React from "react";
import { TodoProvider } from "../TodoContext"; 
import { AppUI } from "./AppUI.js"; 
import '../CSS/main.css';


function App() {
  return (
    <TodoProvider>  
      <AppUI />
    </TodoProvider>  
  )
}

export default App;