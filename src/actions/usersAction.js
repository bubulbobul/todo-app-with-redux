import { FETCH_USERS } from "./types";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return dispatch => {
    fetch(usersUrl)
      .then(res => res.json())
      .then(users => {
        console.log(users);
        dispatch({
          type: FETCH_USERS,
          payload: users
        });
      });
  };
};
