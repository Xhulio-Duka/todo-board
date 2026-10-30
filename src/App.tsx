import BoardGrid from "./components/board-grid";
import { TodoContext } from "./contexts/todo-context";
import useTodo from "./hooks/useTodo";
import type { TodoStateType } from "./types/todo-state-type";

export default function App() {
  const todoState: TodoStateType = useTodo();

  return (
    <TodoContext.Provider value={todoState}>
      <main className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <BoardGrid />
      </main>
    </TodoContext.Provider>
  );
}
