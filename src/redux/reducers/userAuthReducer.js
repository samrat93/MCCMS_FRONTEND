import { UserActionType } from "../constants/userActionType";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.USER_LOGIN_REQUEST:
      return { loading: true };

    case UserActionType.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case UserActionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
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
