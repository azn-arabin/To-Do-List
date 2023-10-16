import { Dispatch } from "redux";
import { TASK } from "../constants";

export interface TaskData {
  title: string;
  priority: string;
  category: string;
  description: string;
}

export const createTask = (data: TaskData) => (dispatch: Dispatch) => {
  dispatch({ type: TASK.CREATE_TASK, payload: data });
};
