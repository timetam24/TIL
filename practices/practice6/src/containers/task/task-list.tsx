import { TaskI } from "@/app/task/page";
import Task from "./task";

interface TaskListProps {
  tasks: TaskI[];
  onChangeTask: (task: TaskI) => void;
  onDeleteTask: (taskId: number) => void;
}

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TaskListProps) {
  return (
    <ul className="w-96 list-none flex flex-col gap-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center h-8">
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}
