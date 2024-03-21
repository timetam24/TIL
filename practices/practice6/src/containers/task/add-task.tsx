"use client";

import { useState } from "react";
import Button from "./task-button";

export default function AddTask({
  onAddTask,
}: {
  onAddTask: (text: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <div className="w-96 my-5 flex gap-2">
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-2 py-1 rounded w-full"
      />
      <Button
        name="add"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </Button>
    </div>
  );
}
