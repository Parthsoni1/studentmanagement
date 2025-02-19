import React, { memo } from "react";

interface TodoItemProps {
  todo: { id: number; text: string };
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = memo(({ todo, removeTodo }) => {
  console.log(`Rendering TodoItem: ${todo.text}`);
  return (
    <li>
      {todo.text} <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
});

export default TodoItem;
