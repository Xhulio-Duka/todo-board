import { useContext } from "react";
import TodoCard from "./todo-card";
import { TodoContext } from "../contexts/todo-context";
import type { Todo } from "../types/todo-type";
import TodoForm from "./todo-form";

export default function BoardGrid() {
  const { success, todos, show, handleShow } = useContext(TodoContext);

  return (
    <section className="flex flex-1 flex-col gap-8">
      <header className="animate-fade-up flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium tracking-wide text-muted uppercase">
            Workspace
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Todo Board
          </h1>
          <p className="max-w-md text-base text-muted">
            Cattura i task, organizza la giornata, spunta ciò che conta.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {success && (
            <span className="animate-toast-in rounded-md bg-ok-soft px-3 py-1.5 text-sm font-medium text-ok">
              Todo aggiunto
            </span>
          )}
          <button
            type="button"
            onClick={handleShow}
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {show ? "Chiudi form" : "Nuovo todo"}
          </button>
        </div>
      </header>

      {show && (
        <div className="animate-panel-in">
          <TodoForm />
        </div>
      )}

      <div className="animate-fade-up [animation-delay:80ms]">
        {todos.length === 0 ? (
          <div className="flex flex-col items-start gap-2 border-t border-line pt-10">
            <p className="font-display text-xl font-semibold text-ink">
              La board è vuota
            </p>
            <p className="text-muted">
              Apri il form e aggiungi il primo todo.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {todos.map((todo: Todo, index: number) => (
              <li
                key={todo.id}
                className="animate-fade-up"
                style={{ animationDelay: `${100 + index * 50}ms` }}
              >
                <TodoCard todo={todo} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
