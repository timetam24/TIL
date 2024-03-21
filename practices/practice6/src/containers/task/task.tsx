"use client";

import { useState } from "react";
import { TaskI } from "@/app/task/page";
import Button from "./task-button";

interface TaskProps {
  task: TaskI;
  onChange: (task: TaskI) => void;
  onDelete: (taskId: number) => void;
}

export default function Task({ task, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    onChange({
      ...task,
      [name]: name === "done" ? checked : value,
    });
  };

  return (
    <>
      <label className="flex items-center h-full mr-2">
        <input
          type="checkbox"
          checked={task.done}
          name="done"
          onChange={changeHandler}
          className="mr-2 w-4 h-4"
        />
        {isEditing && (
          <input
            value={task.text}
            name="text"
            onChange={changeHandler}
            className="h-full rounded px-2"
          />
        )}
        {!isEditing && <span>{task.text}</span>}
      </label>
      <div className="flex gap-1">
        {isEditing && (
          <Button onClick={() => setIsEditing(false)} name="save">
            save
          </Button>
        )}
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} name="edit">
            edit
          </Button>
        )}
        <Button onClick={() => onDelete(task.id)} name="delete">
          delete
        </Button>
      </div>
    </>
  );
}
