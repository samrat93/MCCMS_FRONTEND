import axios from "axios";
import { UserActionType } from "../../constants/userActionType";
const { REACT_APP_API_ENDPOINT } = process.env;

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
        `${REACT_APP_API_ENDPOINT}/feedback`,
        values,
        config
      );
      dispatch({
        type: UserActionType.FEEDBACK_ADD_SUCCESS,
        payload: data,
      });
    } catch (error) {
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
      `${REACT_APP_API_ENDPOINT}/feedback`,
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
