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

export const userApprovalReducer = (state = {}, action) => {
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

export const addCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.COUNTRY_ADD_REQUEST:
      return { loading: true };
    case AdminActionType.COUNTRY_ADD_SUCCESS:
      return { loading: false, countryInfo: action.payload };
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
      return { loading: false, countries: action.payload };
    case AdminActionType.COUNTRY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addStateReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.STATE_ADD_REQUEST:
      return { loading: true };
    case AdminActionType.STATE_ADD_SUCCESS:
      return { loading: false, stateInfo: action.payload };
    case AdminActionType.STATE_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listStateReducer = (state = { states: [] }, action) => {
  switch (action.type) {
    case AdminActionType.STATE_LIST_REQUEST:
      return { loading: true };
    case AdminActionType.STATE_LIST_SUCCESS:
      return { loading: false, states: action.payload };
    case AdminActionType.STATE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const changePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case AdminActionType.CHANGE_PASSWORD_REQUEST:
      return { loading: true };
    case AdminActionType.CHANGE_PASSWORD_SUCCESS:
      return { loading: false, success: action.payload };
    case AdminActionType.CHANGE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
