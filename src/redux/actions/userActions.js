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
      type: UserActionType.USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error.response.data.length);
    const username = error.response.data.username;
    const password = error.response.data.password;
    const email = error.response.data.email;
    dispatch({
      type: UserActionType.USER_REGISTER_FAIL,
      payload: { username, password, email },
    });
  }
};
