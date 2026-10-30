import { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import type { Todo } from "../types/todo-type";

function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem("todos");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function useTodo() {
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    title: "",
    content: "",
    isCompleted: false,
  });
  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [success, setSuccess] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleTodoChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }

  function handleAddTodo(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextId =
      todos.length === 0 ? 1 : Math.max(...todos.map((t) => t.id)) + 1;
    const newTodo: Todo = {
      id: nextId,
      title: todo.title.trim(),
      content: todo.content.trim(),
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setSuccess((prev) => !prev);
    setTodo({ id: 0, title: "", content: "", isCompleted: false });
    setTimeout(() => {
      setSuccess((prev) => !prev);
    }, 2000);
  }

  function handleDeleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleTodoComplete(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  }

  function handleShow() {
    setShow((prev) => !prev);
  }

  return {
    todo,
    todos,
    success,
    show,
    handleTodoChange,
    handleAddTodo,
    handleDeleteTodo,
    handleTodoComplete,
    handleShow,
  };
}
