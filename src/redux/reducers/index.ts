import { combineReducers } from "redux";
import taskReducer from "./task.reducer";

const reducers = combineReducers({ todos: taskReducer });

export default reducers;
