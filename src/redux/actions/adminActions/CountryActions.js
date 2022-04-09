import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";
const { REACT_APP_API_ENDPOINT } = process.env;

export const AddCountryAction = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.COUNTRY_ADD_REQUEST,
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
      `${REACT_APP_API_ENDPOINT}/country/`,
      values,
      config
    );
    dispatch({
      type: AdminActionType.COUNTRY_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const country_exist = error.response.data.country_name;
    dispatch({
      type: AdminActionType.COUNTRY_ADD_FAIL,
      payload: { country_exist },
    });
  }
};

export const ListCountryAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.COUNTRY_LIST_REQUEST,
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
      `${REACT_APP_API_ENDPOINT}/country/`,
      config
    );
    dispatch({
      type: AdminActionType.COUNTRY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.COUNTRY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DeleteCountryAction = (cid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.COUNTRY_DELETE_REQUEST,
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
      `${REACT_APP_API_ENDPOINT}/country/${cid}`,
      config
    );
    dispatch({
      type: AdminActionType.COUNTRY_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.COUNTRY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UpdateCountryAction = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.COUNTRY_UPDATE_REQUEST,
    });
    const country_name = values.values.country_name;
    const country_desc = values.values.country_desc;

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
      `${REACT_APP_API_ENDPOINT}/country/${values.cid}/`,
      { country_name, country_desc },
      config
    );
    dispatch({
      type: AdminActionType.COUNTRY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.COUNTRY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
