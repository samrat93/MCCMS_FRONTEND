import { combineReducers } from "@reduxjs/toolkit";
import { userLoginReducer, userRegisterReducer } from "./userAuthReducer";

const reducers = combineReducers({
  userSignin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default reducers;
