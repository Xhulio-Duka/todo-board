import { useContext } from "react";
import type { Todo } from "../types/todo-type";
import { TodoContext } from "../contexts/todo-context";

export default function TodoCard({ todo }: { todo: Todo }) {
  const { handleDeleteTodo, handleTodoComplete } = useContext(TodoContext);

  return (
    <article
      className={`flex h-full min-h-44 flex-col gap-3 border border-line bg-surface/90 p-4 transition-colors duration-200 ${
        todo.isCompleted
          ? "border-ok/40 bg-ok-soft/40"
          : "hover:border-accent/40"
      }`}
    >
      <div className="flex-1 space-y-2">
        <h2
          className={`font-display text-lg font-semibold leading-snug text-ink ${
            todo.isCompleted ? "line-through opacity-70" : ""
          }`}
        >
          {todo.title}
        </h2>
        <p
          className={`text-sm leading-relaxed text-muted wrap-break-word ${
            todo.isCompleted ? "line-through opacity-60" : ""
          }`}
        >
          {todo.content}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2 border-t border-line pt-3">
        <button
          type="button"
          onClick={() => handleDeleteTodo(todo.id)}
          className="rounded-md px-3 py-1.5 text-sm font-medium text-danger transition-colors duration-200 hover:bg-danger/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger"
        >
          Elimina
        </button>
        <button
          type="button"
          onClick={() => handleTodoComplete(todo.id)}
          className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
            todo.isCompleted
              ? "bg-ok text-white hover:bg-ok/90 focus-visible:outline-ok"
              : "bg-ink text-white hover:bg-ink/85 focus-visible:outline-ink"
          }`}
        >
          {todo.isCompleted ? "Completato" : "Segna fatto"}
        </button>
      </div>
    </article>
  );
}
