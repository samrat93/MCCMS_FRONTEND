import UserInput from "./hooks/useInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../../redux/actions/userActions/userAuthAction";
import classes from "../../css/account_css/UserAccount.module.css";
import msg from "../../css/msg/msg.module.css";
import { Fragment, useEffect } from "react";
import swal from "sweetalert";

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
  } = UserInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = UserInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
  } = UserInput(isNotEmpty);

  const {
    value: conpassValue,
    isValid: conpassIsValid,
    hasError: conpassHasError,
    valueChangeHandler: conpassChangedHandler,
    inputBlurHandler: conpassBlurHandler,
  } = UserInput(isNotEmpty);

  const { value: firstNameValue, valueChangeHandler: firstNameChangedHandler } =
    UserInput(isNotEmpty);

  const { value: lastNameValue, valueChangeHandler: lastNameChangedHandler } =
    UserInput(isNotEmpty);

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
  };

  useEffect(() => {
    if (error) {
      swal({
        buttons: false,
        timer: 2000,
        icon: "error",
        title: error.email || error.password || error.username,
      });
    }
    if (userInfo) {
      swal("User Registred Successfully.", {
        buttons: false,
        timer: 700,
        icon: "success",
      });
      navigate("/userlogin");
    }
  }, [error, navigate, userInfo]);
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
                    autoComplete="username"
                  />
                  {usernameHasError && (
                    <p className={msg.error}>{"Username Field Is Required."}</p>
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
                    autoComplete="email"
                  />
                  {emailHasError && (
                    <p className={msg.error}>{"Email Field Is Required."}</p>
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
                    autoComplete="first_name"
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
                    autoComplete="last_name"
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
                    autoComplete="password"
                  />
                  {passwordHasError && (
                    <p className={msg.error}>{"Password Field Is Required."}</p>
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
                    autoComplete="conpass"
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
