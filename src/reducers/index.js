import { combineReducers } from "redux";

import todosRed from "./todosRed";
import usersRed from "./usersRed";

const rootReducer = combineReducers({
  todos: todosRed,
  users: usersRed
});

export default rootReducer;
