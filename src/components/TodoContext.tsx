import React, { createContext, useState, ReactNode } from "react";

// Define the type for a todo item
interface Todo {
  id: number;
  text: string;
}

// Define the context type
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

// Create context
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Context Provider
export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
