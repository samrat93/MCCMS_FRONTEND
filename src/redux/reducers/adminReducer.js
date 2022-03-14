import { ReactReduxContext } from "react-redux";
import { AdminActionType } from "../constants/adminActionType";

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case AdminActionType.USER_LIST_REQUEST:
      return { loading: true };
    case AdminActionType.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case AdminActionType.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userApprovalReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case AdminActionType.USER_APPROVAL_REQUEST:
      return { loading: true };
    case AdminActionType.USER_APPROVAL_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.USER_APPROVAL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addCountryReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case AdminActionType.COUNTRY_ADD_REQUEST:
      return { loading: true };
    case AdminActionType.COUNTRY_ADD_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.COUNTRY_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listCountryReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case AdminActionType.COUNTRY_LIST_REQUEST:
      return { loading: true };
    case AdminActionType.COUNTRY_LIST_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.COUNTRY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
