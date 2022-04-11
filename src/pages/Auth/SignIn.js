import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import UserInput from "./hooks/UserInput";
import classes from "../../css/account_css/UserAccount.module.css";
import msg from "../../css/msg/msg.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/userActions/userAuthAction";
import swal from "sweetalert";

const loggedin = () => {
  swal("Loading...", {
    buttons: false,
    timer: 500,
    icon: "success",
  });
};
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
    // resetUsername();
    // resetPassword();
  };

  useEffect(() => {
    if (userInfo) {
      if (userInfo.user_Info.is_superuser) {
        loggedin();
        navigate("/admin");
      } else {
        loggedin();
        navigate("/public");
      }
    } else {
      navigate("/userlogin");
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    if (error) {
      swal("Username or password not match ! ", {
        buttons: false,
        timer: 2000,
        icon: "error",
      });
    }
  }, [error]);

  const usernameInputClasses = usernameHasError
    ? classes["invalid"]
    : classes["input-box-login"];

  const passwordInputClasses = passwordHasError
    ? classes["invalid"]
    : classes["input-box-login"];

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                    autoComplete="current-password"
                  />
                  {usernameHasError && (
                    <p className={msg.error}>{"Username Field Is Required."}</p>
                  )}
                  {/* {error && error.login_error && (
                    <p className={msg.error}>{error.login_error}</p>
                  )} */}
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
                    autoComplete="current-password"
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
                {/* <p className={classes.forgetPass} onClick={handleClickOpen}>
                  Forget Password ?
                </p> */}
                <p className={classes.signinspan}>
                  Not Registered Yet. <Link to="/usersignup"> Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To reset your password, please enter your email address here. We
            will send you your login details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LoginForm;
