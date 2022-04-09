import axios from "axios";
import { UserActionType } from "../../constants/userActionType";
const { REACT_APP_API_ENDPOINT } = process.env;

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
      const { data } = await axios.put(
        `${REACT_APP_API_ENDPOINT}/change_password/${userInfo.user_Info.id}`,
        values,
        config
      );
      dispatch({
        type: UserActionType.CHANGE_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const npassword = error.response.data.new_password;
      const opassword = error.response.data.old_password.old_password;
      dispatch({
        type: UserActionType.CHANGE_PASSWORD_FAIL,
        payload: { npassword, opassword },
      });
    }
  };
