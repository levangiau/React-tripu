import { combineReducers } from "redux";
import tasks from "./tasksReducer"; //=> tasksReducer = tatsks
//
const myReducer = combineReducers({
  tasks, // tasks:task
});
export default myReducer;
