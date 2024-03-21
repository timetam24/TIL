"use client";

import { useReducer } from "react";
import AddTask from "@/containers/task/add-task";
import TaskList from "@/containers/task/task-list";
import taskReducer from "@/containers/task/task-reducer";

export default function TaskPage() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({ type: "added", id: nextId++, text });
  }

  function handleChangeTask(task: TaskI) {
    dispatch({ type: "changed", task });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({ type: "deleted", id: taskId });
  }

  return (
    <main className="w-full bg-slate-300  min-h-screen p-5 font-inter">
      <h1 className="text-xl font-semibold">Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export interface TaskI {
  id: number;
  text: string;
  done: boolean;
}
