import axios from "axios";
import { UserActionType } from "../../constants/userActionType";

export const ChangePasswordUserAction =
  (values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UserActionType.CHANGE_PASSWORD_REQUEST,
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
        type: UserActionType.CHANGE_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("extra error: ", error.response.data);
      //   console.log("extra error: ", error.response.data.password);
      const npassword1 = error.response.data.new_password[0];
      const npassword2 = error.response.data.new_password[1];
      const npassword3 = error.response.data.new_password[2];
      const opassword = error.response.data.old_password.old_password;
      //   const cpassword = error.response.data.password;
      dispatch({
        type: UserActionType.CHANGE_PASSWORD_FAIL,
        payload: { npassword1, npassword2, npassword3, opassword },
      });
    }
  };
