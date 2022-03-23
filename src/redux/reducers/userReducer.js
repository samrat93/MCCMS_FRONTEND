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
      return { loading: false, upfofile: action.pyload };
    case UserActionType.PROFILE_REGISTER_FAILE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
