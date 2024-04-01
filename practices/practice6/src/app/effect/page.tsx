"use client";

import { useState } from "react";
import NewTodo from "@/containers/effect/new-todo";
import { initialTodos } from "@/containers/effect/todos";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function EffectPage() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={(newTodo: Todo) => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map((todo: Todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>{activeTodos.length} todos left</footer>
    </>
  );
}
