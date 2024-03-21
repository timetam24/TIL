import { TaskI } from "@/app/task/page";

interface Action {
  type: "added" | "changed" | "deleted";
  id?: number;
  task?: TaskI;
  text?: string;
}

export default function taskReducer(tasks: TaskI[], action: Action) {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id!, text: action.text!, done: false }];
    }

    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task?.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }

    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
