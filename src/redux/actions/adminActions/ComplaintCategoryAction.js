import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";
const { REACT_APP_API_ENDPOINT } = process.env;

export const AddComplaintCategoryAction =
  (values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: AdminActionType.ADD_COMPLAINT_CATEGORY_REQUEST,
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
        `${REACT_APP_API_ENDPOINT}/complaint-category/`,
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

export const ListComplaintCategoryAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_LIST_REQUEST,
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
      `${REACT_APP_API_ENDPOINT}/complaint-category/`,
      config
    );
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DeleteComplaintCategoryAction =
  (cid) => async (dispatch, getState) => {
    try {
      dispatch({
        type: AdminActionType.COMPLAINT_CATEGORY_DELETE_REQUEST,
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
      const { data } = await axios.delete(
        `${REACT_APP_API_ENDPOINT}/complaint-category/${cid}`,
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

export const UpdateCategoryAction = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_UPDATE_REQUEST,
    });
    const category_name = values.values.category_name;
    const category_desc = values.values.category_desc;
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
      `${REACT_APP_API_ENDPOINT}/complaint-category/${values.cid}/`,
      { category_name, category_desc },
      config
    );
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.COMPLAINT_CATEGORY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
