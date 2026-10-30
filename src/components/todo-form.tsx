import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "../contexts/todo-context";

export default function TodoForm() {
  const { todo, handleTodoChange, handleAddTodo } = useContext(TodoContext);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  return (
    <form
      onSubmit={handleAddTodo}
      className="flex max-w-xl flex-col gap-4 border border-line bg-surface/80 p-5 backdrop-blur-sm sm:p-6"
    >
      <div className="space-y-1">
        <h2 className="font-display text-lg font-semibold text-ink">
          Nuovo todo
        </h2>
        <p className="text-sm text-muted">Titolo e dettaglio, poi salva.</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="title" className="text-sm font-medium text-ink">
          Titolo
        </label>
        <input
          type="text"
          name="title"
          id="title"
          ref={titleRef}
          value={todo.title}
          onChange={handleTodoChange}
          required
          placeholder="Es. Preparare il deploy"
          className="rounded-md border border-line bg-mist px-3 py-2.5 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="content" className="text-sm font-medium text-ink">
          Contenuto
        </label>
        <textarea
          rows={5}
          name="content"
          id="content"
          value={todo.content}
          onChange={handleTodoChange}
          required
          placeholder="Note, checklist, contesto…"
          className="resize-y rounded-md border border-line bg-mist px-3 py-2.5 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="self-start rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Aggiungi
      </button>
    </form>
  );
}
