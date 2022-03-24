import axios from "axios";
import { UserActionType } from "../../constants/userActionType";

export const registerComplaintAction =
  (values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UserActionType.COMPLAINT_REGISTER_REQUEST,
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
        "http://127.0.0.1:8000/api/complaint/",
        values,
        config
      );
      dispatch({
        type: UserActionType.COMPLAINT_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      // console.log("error in complaint : ", error.response.data);
      dispatch({
        type: UserActionType.COMPLAINT_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listComplaintAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionType.LIST_COMPLAINT_REQUEST,
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
    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/complaint/",
      config
    );
    dispatch({
      type: UserActionType.LIST_COMPLAINT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log("error in complaint : ", error.response.data);
    dispatch({
      type: UserActionType.LIST_COMPLAINT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
