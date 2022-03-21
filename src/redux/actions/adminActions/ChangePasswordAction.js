import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";

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
