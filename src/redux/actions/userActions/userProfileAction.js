import axios from "axios";
import { UserActionType } from "../../constants/userActionType";

export const registerProfileAction = (values) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionType.PROFILE_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
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
    dispatch({
      type: UserActionType.PROFILE_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listProfileAction = () => async (dispatch) => {
  try {
    dispatch({
      type: UserActionType.PROFILE_LIST_REQUEST,
    });

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/user-profile/",
      config
    );
    dispatch({
      type: UserActionType.PROFILE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionType.PROFILE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfileAction = (values) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionType.PROFILE_UPDATE_REQUEST,
    });

    const val = values.form_data;
    const config = {
      headers: {
        "Content-Type":
          "multipart/form-data;boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "content-type": "application/json",
      },
    };
    const { data } = await axios.patch(
      `http://127.0.0.1:8000/api/user-profile/${values.id}/`,
      val,
      config
    );
    dispatch({
      type: UserActionType.PROFILE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionType.PROFILE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
