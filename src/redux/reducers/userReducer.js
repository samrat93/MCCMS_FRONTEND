import { UserActionType } from "../constants/userActionType";

export const complaintReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.COMPLAINT_REGISTER_REQUEST:
      return { loading: true };
    case UserActionType.COMPLAINT_REGISTER_SUCCESS:
      return { loading: false, compList: action.payload };
    case UserActionType.COMPLAINT_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const profileAddReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.PROFILE_REGISTER_REQUEST:
      return { loading: true };
    case UserActionType.PROFILE_REGISTER_SUCCESS:
      return { loading: false, userProfile: action.pyload };
    case UserActionType.PROFILE_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listComplaintReducer = (state = { compList: [] }, action) => {
  switch (action.type) {
    case UserActionType.LIST_COMPLAINT_REQUEST:
      return { loading: true };
    case UserActionType.LIST_COMPLAINT_SUCCESS:
      return { loading: false, compList: action.payload };
    case UserActionType.LIST_COMPLAINT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const changeUserPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.CHANGE_PASSWORD_REQUEST:
      return { loading: true };
    case UserActionType.CHANGE_PASSWORD_SUCCESS:
      return { loading: false, success: action.payload };
    case UserActionType.CHANGE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
