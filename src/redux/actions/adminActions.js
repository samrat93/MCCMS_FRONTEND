import axios from "axios";
import { AdminActionType } from "../constants/adminActionType";

export const readalluser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.USER_LIST_REQUEST,
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
      type: AdminActionType.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.USER_LIST_FAIL,
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
      type: AdminActionType.USER_APPROVAL_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    console.log("Tooooooooooooooookeeeeeeeeeeeeen", userInfo);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "content-type": "application/json",
      },
    };

    console.log("Tooooooooooooooookeeeeeeeeeeeeen", userInfo.token);

    const { data } = await axios.post(
      `http://127.0.0.1:8000/api/user-approve/${user.id}`,
      user,
      config
    );

    dispatch({
      type: AdminActionType.USER_APPROVAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.USER_APPROVAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AddCountryAction = (values) => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.COUNTRY_ADD_REQUEST,
    });
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    console.log("Data save successfully");
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/country/",
      values,
      config
    );
    dispatch({
      type: AdminActionType.COUNTRY_ADD_SUCCESS,
      payload: data,
    });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error.response.data);
    //   const username = error.response.data.username;
    //   const password = error.response.data.password;
    //   const email = error.response.data.email;
    dispatch({
      type: AdminActionType.COUNTRY_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
