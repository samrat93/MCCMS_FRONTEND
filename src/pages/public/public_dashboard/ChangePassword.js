import formclasses from "../../../css/account_css/UserAccount.module.css";
import classes from "../../../css/public_css/publicDashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { ChangePasswordUserAction } from "../../../redux/actions/userActions/changePasswordUserAction";
import msg from "../../../css/msg/msg.module.css";
import UserInput from "../../Auth/hooks/useInput";
import swal from "sweetalert";

const isNotEmpty = (value) => value.trim() !== "";

const ChangePasswordPublic = () => {
  const dispatch = useDispatch();

  const changePasswordUserR = useSelector((state) => state.changePasswordUserR);
  const { error, success } = changePasswordUserR;

  const {
    value: new_password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = UserInput(isNotEmpty);

  const {
    value: old_password,
    isValid: old_passwordIsValid,
    hasError: old_passwordHasError,
    valueChangeHandler: old_passwordChangeHandler,
    inputBlurHandler: old_passwordBlurHandler,
    reset: resetOld_password,
  } = UserInput(isNotEmpty);

  const {
    value: conf_password,
    isValid: conf_passwordIsValid,
    hasError: conf_passwordHasError,
    valueChangeHandler: conf_passwordChangeHandler,
    inputBlurHandler: conf_passwordBlurHandler,
    reset: resetConf_password,
  } = UserInput(isNotEmpty);

  let formIsValid = false;
  if (passwordIsValid && old_passwordIsValid && conf_passwordIsValid) {
    formIsValid = true;
  }
  const values = { new_password, old_password, conf_password };

  let passwordMatch = false;
  if (new_password === conf_password) {
    passwordMatch = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      dispatch(ChangePasswordUserAction(values));
      resetOld_password();
      resetConf_password();
      resetPassword();
    }
  };

  useEffect(() => {
    if (error) {
      swal({
        buttons: false,
        timer: 2000,
        title: error.npassword || error.opassword,
        icon: "error",
      });
    }
  }, [error]);

  const passwordClasses =
    passwordHasError && old_passwordHasError && conf_passwordHasError
      ? formclasses["invalid"]
      : formclasses["input-box-login"];

  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>Change Password</div>
                <div className={formclasses.content}>
                  <form onSubmit={submitHandler}>
                    <div className={formclasses["user-details"]}>
                      <div className={passwordClasses}>
                        <span className={formclasses.signinspan}>
                          Old Password
                        </span>
                        <input
                          type="password"
                          name="old_password"
                          placeholder="Enter your old password"
                          value={old_password}
                          onChange={old_passwordChangeHandler}
                          onBlur={old_passwordBlurHandler}
                        />
                        {old_passwordHasError && (
                          <p className={msg.error}>
                            {"Old Password Field Is Required."}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={formclasses["user-details"]}>
                      <div className={passwordClasses}>
                        <span className={formclasses.signinspan}>
                          New Password
                        </span>
                        <input
                          type="password"
                          name="new_password"
                          value={new_password}
                          placeholder="Enter your New password"
                          onChange={passwordChangeHandler}
                          onBlur={passwordBlurHandler}
                        />

                        {passwordHasError && (
                          <p className={msg.error}>
                            {"New Password Field Is Required."}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={formclasses["user-details"]}>
                      <div className={passwordClasses}>
                        <span className={formclasses.signinspan}>
                          Confirm Password
                        </span>
                        <input
                          type="password"
                          name="conf_password"
                          value={conf_password}
                          placeholder="Confirm your New password"
                          onChange={conf_passwordChangeHandler}
                          onBlur={conf_passwordBlurHandler}
                        />

                        {conf_passwordHasError && (
                          <p className={msg.error}>
                            {"Confirm Password Field Is Required."}
                          </p>
                        )}
                        {!passwordMatch && (
                          <p className={msg.error}>
                            {"Password Doesn't Match !"}
                          </p>
                        )}

                        {success && (
                          <p className={msg.success}>
                            {"Password Change Successfully"}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={formclasses["user-details"]}>
                      <div className={formclasses["input-box-login"]}>
                        <div className={formclasses.button}>
                          <input
                            type="submit"
                            disabled={!formIsValid}
                            value="Change Password"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePasswordPublic;
