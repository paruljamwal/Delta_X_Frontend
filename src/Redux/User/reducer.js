import {
  REGISTERFAIL,
  REGISTERLOADING,
  REGISTERSUCCESS,
  USERFAIL,
  USERLOADING,
  USERSUCCESS,
} from "./actionType";

import { getLocalData, saveLocalData  } from "../../Utils/localStorage";

const initStore = {
  loading: false,
  error: false,
  isAuth: getLocalData("isAuth") ? true :  false ,
};

export const UserReducer = (store = initStore, { type, payload }) => {

  switch (type) {

    case REGISTERLOADING:
      return {
        ...store,
        loading: true,
        error: false,
      };

  

    case REGISTERFAIL:
      return {
        ...store,
        error: true,
        loading: false,
      };

    case USERLOADING:
      return {
        ...store,
        loading: true,
        error: false,
      };

    case USERSUCCESS:
      saveLocalData("isAuth",true)
      return {
        ...store,
        loading: false,
        error: false,
        isAuth: true ,
      };

    case USERFAIL:
      saveLocalData("isAuth",false)
      return {
        ...store,
        error: true,
        loading: false,
      };

 

    default:
        return{
            store
        } 
  }
};


export default UserReducer;