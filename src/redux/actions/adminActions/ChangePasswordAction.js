import axios from "axios";
import { AdminActionType } from "../../constants/adminActionType";

export const ChangePasswordAction = (values) => async (dispatch) => {
  try {
    dispatch({
      type: AdminActionType.CHANGE_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Token ${localStorage.getItem("userInfo")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/change_password/${values.id}`,
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
