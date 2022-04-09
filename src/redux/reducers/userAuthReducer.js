import { UserActionType } from "../constants/userActionType";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.USER_LOGIN_REQUEST:
      return { loading: true };

    case UserActionType.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case UserActionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case UserActionType.USER_LOGOUT:
      return { loading: false };

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.USER_REGISTER_REQUEST:
      return { loading: true };
    case UserActionType.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserActionType.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case UserActionType.USER_LIST_REQUEST:
      return { loading: true };
    case UserActionType.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case UserActionType.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userApprovalReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case UserActionType.USER_APPROVAL_REQUEST:
      return { loading: true };
    case UserActionType.USER_APPROVAL_SUCCESS:
      return { loading: false, success: action.payload };
    case UserActionType.USER_APPROVAL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
