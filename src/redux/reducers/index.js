import { combineReducers } from "@reduxjs/toolkit";
import {
  userLoginReducer,
  userRegisterReducer,
  userApprovalReducer,
  userListReducer,
} from "./userAuthReducer";
import { addCountryReducer, listCountryReducer } from "./adminReducer";

const reducers = combineReducers({
  userSignin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userApproval: userApprovalReducer,
  addCountry: addCountryReducer,
  listCountry: listCountryReducer,
});

export default reducers;
