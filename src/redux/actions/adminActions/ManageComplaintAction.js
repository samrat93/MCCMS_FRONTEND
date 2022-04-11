import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";
const { REACT_APP_API_ENDPOINT } = process.env;

export const addComplaintAction = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.ADD_COMPLAINT_REMARKS_REQUEST,
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
      `${REACT_APP_API_ENDPOINT}/complaint-remarks/`,
      values,
      config
    );
    dispatch({
      type: AdminActionType.ADD_COMPLAINT_REMARKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.ADD_COMPLAINT_REMARKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ListComplaintRemarksAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.LIST_COMPLAINT_REMARKS_REQUEST,
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
      `${REACT_APP_API_ENDPOINT}/complaint-remarks/`,
      config
    );
    dispatch({
      type: AdminActionType.LIST_COMPLAINT_REMARKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: AdminActionType.LIST_COMPLAINT_REMARKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UpdateRemarksAction = (remarks) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.COMPLAINT_REMARKS_UPDATE_REQUEST,
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
      `${REACT_APP_API_ENDPOINT}/complaint_remarks_update/${remarks.cid}`,
      {
        complaint_status: remarks.comp_status,
      },
      config
    );

    dispatch({
      type: AdminActionType.COMPLAINT_REMARKS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.COMPLAINT_REMARKS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
