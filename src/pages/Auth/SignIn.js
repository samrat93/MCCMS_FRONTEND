import UserInput from "./hooks/UserInput";
import classes from "../../css/account_css/UserAccount.module.css";
import msg from "../../css/msg/msg.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/userActions/userAuthAction";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangedHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = UserInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (usernameIsValid && passwordIsValid) {
    formIsValid = true;
  }
  const values = { usernameValue, passwordValue };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      dispatch(userLogin(values));
    }
    resetUsername();
    resetPassword();
  };

  useEffect(() => {
    if (userInfo) {
      if (userInfo.user_Info.is_superuser) {
        navigate("/admin");
      } else {
        navigate("/public");
      }
    } else {
      navigate("/userlogin");
    }
  }, [userInfo, navigate]);

  const usernameInputClasses = usernameHasError
    ? classes["invalid"]
    : classes["input-box-login"];

  const passwordInputClasses = passwordHasError
    ? classes["invalid"]
    : classes["input-box-login"];

  return (
    <>
      <div className={classes.signupBody}>
        <div className={classes.containerSign}>
          <div className={classes.title}>Login</div>
          <div className={classes.content}>
            <form onSubmit={formSubmissionHandler}>
              <div className={classes["user-details"]}>
                <div className={usernameInputClasses}>
                  <span className={classes.signinspan}>Username</span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={usernameValue}
                    onChange={usernameChangedHandler}
                    onBlur={usernameBlurHandler}
                  />
                  {usernameHasError && (
                    <p className={msg.error}>{"Username Field Is Required."}</p>
                  )}
                  {error && error.login_error && (
                    <p className={msg.error}>{error.login_error}</p>
                  )}
                </div>
              </div>

              <div className={classes["user-details"]}>
                <div className={passwordInputClasses}>
                  <span className={classes.signinspan}>Password</span>
                  <input
                    type="password"
                    name="password"
                    value={passwordValue}
                    placeholder="Enter your password"
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                  />
                  {passwordHasError && (
                    <p className={msg.error}>{"Password Field Is Required."}</p>
                  )}
                  {/* {error && <p className={msg.error}>{error}</p>} */}
                </div>
              </div>
              <div className={classes["user-details"]}>
                <div className={classes["input-box-login"]}>
                  <div className={classes.button}>
                    <input
                      type="submit"
                      disabled={!formIsValid}
                      value="Login"
                    />
                  </div>
                </div>
              </div>
              <div className={classes["input-box"]}>
                <p className={classes.signinspan}>
                  Not Registered Yet. <Link to="/usersignup"> Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
