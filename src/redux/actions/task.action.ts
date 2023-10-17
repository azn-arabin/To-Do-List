import { Dispatch } from "redux";
import { TASK } from "../constants";
import { Task } from "../reducers/task.reducer";

export interface TaskData {
  title: string;
  description: string;
  category: string;
}

export const createTask = (data: TaskData) => (dispatch: Dispatch) => {
  dispatch({ type: TASK.CREATE_TASK, payload: data });
};

export const changeSelectedCategory =
  (data: string) => (dispatch: Dispatch) => {
    dispatch({ type: TASK.CHANGE_SELECTED_CATEGORY, payload: data });
  };

export const updateTask = (data: Task) => (dispatch: Dispatch) => {
  dispatch({ type: TASK.UPDATE_TASK, payload: data });
};

export const deleteTask = (data: Number) => (dispatch: Dispatch) => {
  dispatch({ type: TASK.DELETE_TASK, payload: data });
};
