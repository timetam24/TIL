"use client";

import { useState, useRef } from "react";
import Button from "./task-button";

export default function AddTask({
  onAddTask,
}: {
  onAddTask: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const textRef = useRef(text);

  const handleAdd = () => {
    setTimeout(() => {
      onAddTask(textRef.current);
      setText("");
    }, 3000);
  };

  return (
    <div className="w-96 my-5 flex gap-2">
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          textRef.current = e.target.value;
        }}
        className="px-2 py-1 rounded w-full"
      />
      <Button name="add" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}
