import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";

export const readalluser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.USER_LIST_REQUEST,
    });
    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Token ${userInfo.token}`,
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

    console.log("verify data in action : ", user.is_active);
    console.log("user id data in action : ", user.id);
    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Token ${userInfo.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/user-approve/${user.id}`,
      user,
      config
    );

    dispatch({
      type: AdminActionType.USER_APPROVAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error in approve : ", error.response.data);
    dispatch({
      type: AdminActionType.USER_APPROVAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
