import axios from "axios";
import { UserActionType } from "../../constants/userActionType";

export const registerProfileAction = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionType.PROFILE_REGISTER_REQUEST,
    });
    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Token ${userInfo.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/user-profile/",
      values,
      config
    );
    dispatch({
      type: UserActionType.PROFILE_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error in profile : ", error.response.data);
    dispatch({
      type: UserActionType.PROFILE_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
