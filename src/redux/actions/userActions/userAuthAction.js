import axios from "axios";
import { UserActionType } from "../../constants/userActionType";
const { REACT_APP_API_ENDPOINT } = process.env;

export const userSignup = (values) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionType.USER_REGISTER_REQUEST,
    });

    const username = values.emailValue;
    const first_name = values.firstNameValue;
    const email = values.emailValue;
    const last_name = values.lastNameValue;
    const password = values.passwordValue;
    const val = { username, email, first_name, last_name, password };

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_ENDPOINT}/register/`,
      val,
      config
    );
    dispatch({
      type: UserActionType.USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
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

    const username = values.usernameValue;
    const password = values.passwordValue;
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${REACT_APP_API_ENDPOINT}/login/`,
      { username, password },
      config
    );
    dispatch({
      type: UserActionType.USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log("error in login", error.response.data);
    const login_error = error.response.data.non_field_errors[0];
    dispatch({
      type: UserActionType.USER_LOGIN_FAIL,
      payload: { login_error },
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: UserActionType.USER_LOGOUT });
};
