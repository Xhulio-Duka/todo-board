import { createContext } from "react";
import type { TodoStateType } from "../types/todo-state-type";

export const TodoContext = createContext<TodoStateType>({
  todo: { id: 0, title: "", content: "", isCompleted: false },
  todos: [],
  success: false,
  show: false,
  handleTodoChange: () => {},
  handleAddTodo: () => {},
  handleDeleteTodo: () => {},
  handleTodoComplete: () => {},
  handleShow: () => {},
});
