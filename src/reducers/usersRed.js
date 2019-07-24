import { FETCH_USERS } from "../actions/types";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.log(action.payload);
      return [...state, ...action.payload];
    default:
      return state;
  }
};
