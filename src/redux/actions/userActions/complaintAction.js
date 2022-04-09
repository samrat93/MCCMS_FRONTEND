import axios from "axios";
import { UserActionType } from "../../constants/userActionType";
const { REACT_APP_API_ENDPOINT } = process.env;

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
        `${REACT_APP_API_ENDPOINT}/complaint/`,
        values,
        config
      );
      dispatch({
        type: UserActionType.COMPLAINT_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
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
      `${REACT_APP_API_ENDPOINT}/complaint/`,
      config
    );
    dispatch({
      type: UserActionType.LIST_COMPLAINT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionType.LIST_COMPLAINT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
