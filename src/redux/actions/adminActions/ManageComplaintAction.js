import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";

export const addComplaintAction = (values) => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.ADD_COMPLAINT_REMARKS_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/complaint-remarks/",
      values,
      config
    );
    dispatch({
      type: AdminActionType.ADD_COMPLAINT_REMARKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: AdminActionType.ADD_COMPLAINT_REMARKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ListComplaintRemarksAction = () => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.LIST_COMPLAINT_REMARKS_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/complaint-remarks/",
      config
    );
    dispatch({
      type: AdminActionType.LIST_COMPLAINT_REMARKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.LIST_COMPLAINT_REMARKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UpdateRemarksAction = (remarks) => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.COMPLAINT_REMARKS_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/complaint_remarks_update/${remarks.cid}`,
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
    console.log("error in approve : ", error.response.data);
    dispatch({
      type: AdminActionType.COMPLAINT_REMARKS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
