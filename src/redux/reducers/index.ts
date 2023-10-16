import { combineReducers } from "redux";
import taskReducer from "./task.reducer";

const reducers = combineReducers({ task: taskReducer });

export default reducers;
