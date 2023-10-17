import { TASK, TaskActionTypes } from "../constants";

export interface Task {
  id: number;
  title: string;
  category: string;
  description: string;
  finished: boolean;
  created_at: string;
  updated_at: string;
}

export interface AppState {
  tasks: Task[];
  categories: string[];
  selectedCategory: string;
}

const initialState: AppState = {
  tasks: [],
  categories: ["Default", "Personal", "Shopping", "Wishlist", "Work"],
  selectedCategory: "All Categories",
};

const taskReducer = (
  state: AppState = initialState,
  action: { type: TaskActionTypes; payload: any },
): AppState => {
  switch (action.type) {
    case TASK.CREATE_TASK:
      const newTask: Task = {
        id: Date.now(),
        title: action.payload.title,
        category: action.payload.category,
        description: action.payload.description,
        finished: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case TASK.CHANGE_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case TASK.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task,
        ),
      };
    case TASK.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TASK.CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case TASK.UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category === action.payload.name ? action.payload.newName : category,
        ),
        tasks: state.tasks.map((task) =>
          task.category === action.payload.name
            ? {
                ...task,
                category: action.payload.newName,
              }
            : task,
        ),
      };
    case TASK.DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category !== action.payload,
        ),
        tasks: state.tasks.filter((task) => task.category !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
