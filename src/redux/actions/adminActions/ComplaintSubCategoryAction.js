import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";
const { REACT_APP_API_ENDPOINT } = process.env;

export const AddComplaintSubCategoryAction =
  (values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: AdminActionType.ADD_COMPLAINT_SUB_CATEGORY_REQUEST,
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
        `${REACT_APP_API_ENDPOINT}/complaint-sub-category/`,
        values,
        config
      );

      dispatch({
        type: AdminActionType.ADD_COMPLAINT_SUB_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const complaint_exist = error.response.data.sub_category_name;
      dispatch({
        type: AdminActionType.ADD_COMPLAINT_SUB_CATEGORY_FAIL,
        payload: { complaint_exist },
      });
    }
  };

export const ListComplaintSubCategoryAction =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: AdminActionType.COMPLAINT_SUB_CATEGORY_LIST_REQUEST,
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
        `${REACT_APP_API_ENDPOINT}/complaint-sub-category/`,
        config
      );
      dispatch({
        type: AdminActionType.COMPLAINT_SUB_CATEGORY_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AdminActionType.COMPLAINT_SUB_CATEGORY_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const DeleteComplaintSubCategoryAction =
  (cid) => async (dispatch, getState) => {
    try {
      dispatch({
        type: AdminActionType.COMPLAINT_SUB_CATEGORY_DELETE_REQUEST,
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
        `${REACT_APP_API_ENDPOINT}/complaint-sub-category/${cid}`,
        config
      );
      dispatch({
        type: AdminActionType.COMPLAINT_SUB_CATEGORY_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AdminActionType.COMPLAINT_SUB_CATEGORY_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UpdateSubCategoryAction =
  (values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: AdminActionType.COMPLAINT_SUBCAT_UPDATE_REQUEST,
      });
      const category_id = values.values.category_id;
      const sub_category_desc = values.values.sub_category_desc;
      const sub_category_name = values.values.sub_category_name;
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
        `${REACT_APP_API_ENDPOINT}/complaint-sub-category/${values.id}/`,
        { category_id, sub_category_name, sub_category_desc },
        config
      );
      dispatch({
        type: AdminActionType.COMPLAINT_SUBCAT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AdminActionType.COMPLAINT_SUBCAT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
