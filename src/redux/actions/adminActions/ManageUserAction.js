import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";

export const readalluser = (pageNum) => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.USER_LIST_REQUEST,
    });
    // console.log("pagenum", pageNum);
    const config = {
      headers: {
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        "content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/register/?page=${pageNum.Page}`,
      config
    );
    dispatch({
      type: AdminActionType.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response.data);
    dispatch({
      type: AdminActionType.USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserAprroval = (user) => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.USER_APPROVAL_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
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
