import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";

export const AddComplaintCategoryAction = (values) => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.ADD_COMPLAINT_CATEGORY_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/complaint-category/",
      values,
      config
    );

    dispatch({
      type: AdminActionType.ADD_COMPLAINT_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const complaint_exist = error.response.data.category_name;
    dispatch({
      type: AdminActionType.ADD_COMPLAINT_CATEGORY_FAIL,
      payload: { complaint_exist },
    });
  }
};

export const ListComplaintCategoryAction = () => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_LIST_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/complaint-category/",
      config
    );
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log("error in cat-action:", error.response.data);
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DeleteComplaintCategoryAction = (cid) => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_DELETE_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(
      `http://127.0.0.1:8000/api/complaint-category/${cid}`,
      config
    );
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UpdateCategoryAction = (values) => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_UPDATE_REQUEST,
    });
    const category_name = values.values.category_name;
    const category_desc = values.values.category_desc;

    const config = {
      headers: {
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.patch(
      `http://127.0.0.1:8000/api/complaint-category/${values.cid}/`,
      { category_name, category_desc },
      config
    );
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response.data);
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
