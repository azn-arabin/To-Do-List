import { TASK, TaskActionTypes } from "../constants";

interface Task {
  id: number;
  title: string;
  priority: string;
  category: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

const taskReducer = (
  state: Task[] = [],
  action: { type: TaskActionTypes; payload: any },
): Task[] => {
  switch (action.type) {
    case TASK.CREATE_TASK:
      const newTask: Task = {
        id: Date.now(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...action.payload!,
      };
      return [...state, newTask];

    default:
      return state;
  }
};

export default taskReducer;
