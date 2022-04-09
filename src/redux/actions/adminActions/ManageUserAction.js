import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";
const { REACT_APP_API_ENDPOINT } = process.env;

export const readalluser = (pageNum) => async (dispatch, getState) => {
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
      `${REACT_APP_API_ENDPOINT}/register/?page=${pageNum.Page}`,
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
      `${REACT_APP_API_ENDPOINT}/user-approve/${user.id}`,
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
