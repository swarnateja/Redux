import axios from "axios";
import {
  BUY_LAPTOP,
  BUY_MOBILE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL
} from "./actionTypes";
export const buyLaptop = () => {
  return {
    type: BUY_LAPTOP
  };
};

export const buyMobile = () => {
  return {
    type: BUY_MOBILE
  };
};

export const fetchUserRequset = () => {
  return { type: FETCH_USER_REQUEST };
};

export const fetchUserSuccess = (users) => {
  return { type: FETCH_USER_SUCCESS, data: users };
};
export const fetchUserFail = (error) => {
  return { type: FETCH_USER_FAIL, data: error };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequset());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFail(error));
      });
  };
};
