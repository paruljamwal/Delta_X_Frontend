import axios from "axios";
import {
  REGISTERFAIL,
  REGISTERLOADING,
  REGISTERSUCCESS,
  USERFAIL,
  USERLOADING,
  USERSUCCESS,
} from "./actionType";

const userLoading = () => {
  return {
    type: USERLOADING,
  };
};

export const userSucces = (payload) => {
  return {
    type: USERSUCCESS,
    payload,
  };
};

const userFail = (payload) => {
  return {
    type: USERFAIL,
    payload,
  };
};

export const LoginUser = (payload) => (dispatch) => {
  dispatch(userLoading());
  axios
    .post("https://deltaxmusic-api.herokuapp.com/login", payload)
    .then((res) => dispatch(userSucces(payload)))
    .then((err) => dispatch(userFail(err)));
};

// register.....

const registerLoading = () => {
  return {
    type: REGISTERLOADING,
  };
};

// const registerSucces = (payload) => {
//   return {
//     type: REGISTERSUCCESS,
//     payload,
//   };
// };

const registerFail = (payload) => {
  return {
    type: REGISTERFAIL,
    payload,
  };
};

export const RegisterUser = (payload) => (dispatch) => {
 
  dispatch(registerLoading());
  axios
    .post("https://deltaxmusic-api.herokuapp.com/register", payload)
    .then((err) => dispatch(registerFail(err)));
};
