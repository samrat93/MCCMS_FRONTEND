import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";

export const AddStateAction = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.STATE_ADD_REQUEST,
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
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/state/",
      values,
      config
    );

    dispatch({
      type: AdminActionType.STATE_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const state_exist = error.response.data.state_name;
    const other_error = error.response.data;
    console.log("state other error : ", other_error);
    dispatch({
      type: AdminActionType.STATE_ADD_FAIL,
      payload: { state_exist },
    });
  }
};

export const ListStateAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.STATE_LIST_REQUEST,
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
      "http://127.0.0.1:8000/api/state/",
      config
    );
    dispatch({
      type: AdminActionType.STATE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.STATE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DeleteStateAction = (sid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.STATE_DELETE_REQUEST,
    });

    const {
      userSignin: { userInfo },
    } = getState();
    console.log("State-id in delete: ", sid);
    const config = {
      headers: {
        Authorization: `Token ${userInfo.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(
      `http://127.0.0.1:8000/api/state/${sid}`,
      config
    );
    dispatch({
      type: AdminActionType.STATE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error_in_delete_state : ", error.response.data);
    dispatch({
      type: AdminActionType.STATE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UpdateStateAction = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.STATE_UPDATE_REQUEST,
    });
    const state_name = values.values.state_name;
    const state_desc = values.values.state_desc;
    console.log(state_name, state_desc);
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
    const { data } = await axios.patch(
      `http://127.0.0.1:8000/api/state/${values.sid}/`,
      { state_name, state_desc },
      config
    );
    dispatch({
      type: AdminActionType.STATE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error_in_update_state : ", error.response.data);
    dispatch({
      type: AdminActionType.STATE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
