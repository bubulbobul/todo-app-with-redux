import { combineReducers } from "redux";

import todosRed from "./todosRed";

const rootReducer = combineReducers({
  todos: todosRed
});

export default rootReducer;
