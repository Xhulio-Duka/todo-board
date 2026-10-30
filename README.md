# Todo Board

A web app for managing tasks on a board: create, complete, and delete todos.

## What it does

- Add todos with a title and content from a toggleable form
- Show todos in a responsive card grid
- Mark individual todos as complete or incomplete
- Delete todos
- Persist the list in `localStorage` so it survives page reloads

State lives in a custom `useTodo` hook and is shared through React Context.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4

## Structure

```
src/
  App.tsx                    # layout and context provider
  hooks/useTodo.tsx          # state, handlers, localStorage
  contexts/todo-context.tsx  # shared todo state
  components/todo-form.tsx   # create todo form
  components/todo-card.tsx   # single todo + actions
  components/board-grid.tsx  # header, form toggle, board grid
  types/                     # Todo and context value types
```

## Getting started

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
pnpm preview
```
