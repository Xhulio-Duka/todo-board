import type { ChangeEvent, SubmitEvent } from "react";
import type { Todo } from "./todo-type";

export type TodoStateType = {
  todo: Todo;
  todos: Todo[];
  success: boolean;
  show: boolean;
  handleTodoChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleAddTodo: (e: SubmitEvent<HTMLFormElement>) => void;
  handleDeleteTodo: (id: number) => void;
  handleTodoComplete: (id: number) => void;
  handleShow: () => void;
};
