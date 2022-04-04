import UserInput from "./hooks/UserInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../../redux/actions/userActions/userAuthAction";
import classes from "../../css/account_css/UserAccount.module.css";
import msg from "../../css/msg/msg.module.css";
import { Fragment, useEffect, useState } from "react";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const UserRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangedHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = UserInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = UserInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = UserInput(isNotEmpty);

  const {
    value: conpassValue,
    isValid: conpassIsValid,
    hasError: conpassHasError,
    valueChangeHandler: conpassChangedHandler,
    inputBlurHandler: conpassBlurHandler,
    reset: resetConpass,
  } = UserInput(isNotEmpty);

  const {
    value: firstNameValue,
    valueChangeHandler: firstNameChangedHandler,
    reset: resetFirstname,
  } = UserInput(isNotEmpty);

  const {
    value: lastNameValue,
    valueChangeHandler: lastNameChangedHandler,
    reset: resetLastname,
  } = UserInput(isNotEmpty);

  let formIsValid = false;
  if (usernameIsValid && emailIsValid && passwordIsValid && conpassIsValid) {
    formIsValid = true;
  }

  let passwordMatch = false;
  if (passwordValue === conpassValue) {
    passwordMatch = true;
  }
  const values = {
    usernameValue,
    emailValue,
    passwordValue,
    firstNameValue,
    lastNameValue,
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    } else {
      dispatch(userSignup(values));
    }
    resetUsername();
    resetEmail();
    resetPassword();
    resetConpass();
    resetFirstname();
    resetLastname();
  };
  const InputClasses =
    usernameHasError && emailHasError && passwordHasError && conpassHasError
      ? classes["invalid"]
      : classes["input-box-login"];

  return (
    <Fragment>
      <div className={classes.signupBody}>
        <div className={classes.containerSign}>
          <div className={classes.title}>Registration</div>
          <div className={classes.content}>
            <form onSubmit={submitForm}>
              <div className={classes["user-details"]}>
                {/* {loading && <p>Loading...</p>} */}
                <div className={InputClasses}>
                  <span className={classes.signinspan}>Username</span>
                  <input
                    type="text"
                    name="username"
                    value={usernameValue}
                    onChange={usernameChangedHandler}
                    onBlur={usernameBlurHandler}
                    placeholder="Enter your username"
                  />
                  {usernameHasError && (
                    <p className={msg.error}>{"Username Field Is Required."}</p>
                  )}
                  {error && error.username && (
                    <p className={msg.error}>{error.username}</p>
                  )}
                </div>

                <div className={InputClasses}>
                  <span className={classes.signinspan}>Email</span>
                  <input
                    type="text"
                    name="email"
                    value={emailValue}
                    onChange={emailChangedHandler}
                    placeholder="Enter your email"
                    onBlur={emailBlurHandler}
                  />
                  {emailHasError && (
                    <p className={msg.error}>{"Email Field Is Required."}</p>
                  )}
                  {error && error.email && (
                    <p className={msg.error}>{error.email}</p>
                  )}
                </div>

                <div className={classes["input-box"]}>
                  <span className={classes.signinspan}>First Name</span>
                  <input
                    type="text"
                    name="first_name"
                    value={firstNameValue}
                    onChange={firstNameChangedHandler}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className={classes["input-box"]}>
                  <span className={classes.signinspan}>Last Name</span>
                  <input
                    type="text"
                    name="last_name"
                    value={lastNameValue}
                    onChange={lastNameChangedHandler}
                    placeholder="Enter your last name"
                  />
                </div>

                <div className={InputClasses}>
                  <span className={classes.signinspan}>Password</span>
                  <input
                    type="password"
                    name="password"
                    value={passwordValue}
                    onChange={passwordChangedHandler}
                    placeholder="Enter your password"
                    onBlur={passwordBlurHandler}
                  />
                  {passwordHasError && (
                    <p className={msg.error}>{"Password Field Is Required."}</p>
                  )}
                  {error && error.password && (
                    <p className={msg.error}>{error.password}</p>
                  )}
                </div>

                <div className={InputClasses}>
                  <span className={classes.signinspan}>Confirm Password</span>
                  <input
                    type="password"
                    name="conpass"
                    value={conpassValue}
                    onChange={conpassChangedHandler}
                    placeholder="Confirm your password"
                    onBlur={conpassBlurHandler}
                  />
                  {conpassHasError && (
                    <p className={msg.error}>
                      {"Confirm Password Field Is Required."}
                    </p>
                  )}
                  {!passwordMatch && (
                    <p className={msg.error}>{"Password Not Matched."}</p>
                  )}
                </div>
              </div>
              <div className={classes.button}>
                <input type="submit" disabled={!formIsValid} value="Register" />
              </div>
              <div className={classes["input-box"]}>
                <p className={classes.signinspan}>
                  {" "}
                  Already Registered ? <Link to="/userlogin"> Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserRegistration;
