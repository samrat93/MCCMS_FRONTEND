import axios from "axios";
import { UserActionType } from "../constants/userActionType";

export const userSignup = (values) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionType.USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    console.log("Data save successfully");
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/register/",
      values,
      config
    );
    dispatch({
      type: UserActionType.USER_REGISTER_SUCCESS,
      payload: data,
    });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error.response.data);
    const username = error.response.data.username;
    const password = error.response.data.password;
    const email = error.response.data.email;
    dispatch({
      type: UserActionType.USER_REGISTER_FAIL,
      payload: { username, password, email },
    });
  }
};

export const userLogin = (values) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionType.USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/login/",
      values,
      config
    );
    dispatch({
      type: UserActionType.USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const login_error = error.response.data.non_field_errors[0];
    dispatch({
      type: UserActionType.USER_LOGIN_FAIL,
      payload: { login_error },
    });
  }
};

export const readalluser = () => async (dispatch, getState) => {
  console.log("dfasdfasd");

  try {
    dispatch({
      type: UserActionType.USER_LIST_REQUEST,
    });
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/register/",
      config
    );
    dispatch({
      type: UserActionType.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionType.USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserAprroval = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionType.USER_APPROVAL_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "content-type": "application/json",
      },
    };

    //console.log(isAdmin)
    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/register/${user.id}`,
      user,
      config
    );

    dispatch({
      type: UserActionType.USER_APPROVAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionType.USER_APPROVAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: UserActionType.USER_LOGOUT });
};
