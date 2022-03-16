import axios from "axios";
import { AdminActionType } from "../constants/adminActionType";

export const readalluser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.USER_LIST_REQUEST,
    });
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/register/",
      config
    );
    dispatch({
      type: AdminActionType.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AdminActionType.USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserAprroval = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.USER_APPROVAL_REQUEST,
    });

    console.log("verify data in action : ", user.is_active);
    console.log("user id data in action : ", user.id);
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
      `http://127.0.0.1:8000/api/user-approve/${user.id}`,
      user,
      config
    );

    dispatch({
      type: AdminActionType.USER_APPROVAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error in approve : ", error.response.data);
    dispatch({
      type: AdminActionType.USER_APPROVAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

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
      "http://127.0.0.1:8000/api/country/",
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
      "http://127.0.0.1:8000/api/country/",
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

export const ChangePasswordAction = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AdminActionType.CHANGE_PASSWORD_REQUEST,
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

    console.log("user_id", userInfo.user_Info.id);
    console.log("token", userInfo.token);

    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/change_password/${userInfo.user_Info.id}`,
      values,
      config
    );

    dispatch({
      type: AdminActionType.CHANGE_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const npassword = error.response.data.new_password;
    const opassword = error.response.data.old_password;
    const cpassword = error.response.data.password;
    dispatch({
      type: AdminActionType.CHANGE_PASSWORD_FAIL,
      payload: { npassword, opassword, cpassword },
    });
  }
};
