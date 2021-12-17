import React from "react";

import '../CSS/todoList.css';

function TodoList(props) {
  return (
    <section className="SetionTodoList">
      <ul className="UlTodoList">
        { props.children }
      </ul>
    </section>
  );
}

export { TodoList };