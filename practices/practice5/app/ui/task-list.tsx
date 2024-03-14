"use client";

import { useState } from "react";
import { Todo } from "./task-app";

interface TaskListProps {
  todos: Todo[];
  onChangeTodo: (todo: Todo) => void;
  onDeleteTodo: (todoId: number) => void;
}

interface TaskProps {
  todo: Todo;
  onChange: (todo: Todo) => void;
  onDelete: (todoId: number) => void;
}

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: TaskListProps) {
  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
