import { combineReducers } from "@reduxjs/toolkit";
import {
  userLoginReducer,
  userRegisterReducer,
  userApprovalReducer,
  userListReducer,
} from "./userAuthReducer";
import {
  addCountryReducer,
  listCountryReducer,
  addStateReducer,
  listStateReducer,
  changePasswordReducer,
  deleteCountryReducer,
  deleteStateReducer,
  addComplainCategoryReducer,
  addComplainSubCategoryReducer,
  ListComplainCategoryReducer,
  ListComplainSubCategoryReducer,
  DeleteComplainCategoryReducer,
  DeleteComplainSubCategoryReducer,
} from "./adminReducer";
import { complaintReducer, profileAddReducer } from "./userReducer";

const reducers = combineReducers({
  userSignin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userApproval: userApprovalReducer,
  addCountry: addCountryReducer,
  listCountry: listCountryReducer,
  deleteCountryRedu: deleteCountryReducer,
  deleteStateRedu: deleteStateReducer,
  addStateRedu: addStateReducer,
  listStateRedu: listStateReducer,
  passwordChangeRedu: changePasswordReducer,
  addComplaintCategoryR: addComplainCategoryReducer,
  listComplaintCategoryR: ListComplainCategoryReducer,
  deleteComplaintCatR: DeleteComplainCategoryReducer,
  addComplaintSubCR: addComplainSubCategoryReducer,
  listComplaintSubCR: ListComplainSubCategoryReducer,
  deleteComplaintSubCR: DeleteComplainSubCategoryReducer,
  complaintReducer: complaintReducer,
  profileAddRedu: profileAddReducer,
});

export default reducers;
