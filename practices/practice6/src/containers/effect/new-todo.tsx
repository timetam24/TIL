"use client";

import { useState } from "react";
import { createTodo } from "./todos";
import { Todo } from "@/app/effect/page";

export default function NewTodo({ onAdd }: { onAdd: (newTodo: Todo) => void }) {
  const [text, setText] = useState("");

  function handleAddClick() {
    setText("");
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}
