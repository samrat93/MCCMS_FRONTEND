import axios from "axios";
import { UserActionType } from "../../constants/userActionType";

export const registerFeedbackAction =
  (values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UserActionType.FEEDBACK_ADD_REQUEST,
      });

      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/feedback/",
        values,
        config
      );
      dispatch({
        type: UserActionType.FEEDBACK_ADD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      // console.log("error in complaint : ", error.response.data);
      dispatch({
        type: UserActionType.FEEDBACK_ADD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listFeedbackAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionType.FEEDBACK_LIST_REQUEST,
    });

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/feedback/",
      config
    );
    dispatch({
      type: UserActionType.FEEDBACK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionType.FEEDBACK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
