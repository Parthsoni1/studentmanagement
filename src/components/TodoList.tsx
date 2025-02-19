import React, { useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "./TodoContext";
import WrappedTodoForm from "./WrappedTodoForm";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const context = useContext(TodoContext);
  const portalRef = useRef<HTMLDivElement>(null);

  if (!context) return null;
  const { todos, addTodo, removeTodo } = context;

  useEffect(() => {
    console.log("TodoList Mounted");
  }, []);

  return (
    <>
      <WrappedTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
      {portalRef.current &&
        ReactDOM.createPortal(<p>Portals Example: Rendered outside main DOM</p>, portalRef.current)}
      <div ref={portalRef}></div>
    </>
  );
};

export default TodoList;
