import React from "react";
import classes from "../../../css/account_css/UserAccount.module.css";
import msg from "../../../css/msg/msg.module.css";
import validate from "../../../components/accounts/user/validateUserLogin";
import UseUserLoginForm from "../../../components/accounts/user/UseUserLoginForm";
import { Link } from "react-router-dom";

const User_login = ({ submitLoginForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseUserLoginForm(
    submitLoginForm,
    validate
  );
  return (
    <div className={classes.signupBody}>
      <div className={classes.container}>
        <div className={classes.title}>Login</div>
        <div className={classes.content}>
          <form onSubmit={handleSubmit}>
            <div className={classes["user-details"]}>
              <div className={classes["input-box"]}>
                <span className={classes.signinspan}>Username</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <p className={msg.error}>{errors.username}</p>
                )}
              </div>
            </div>

            <div className={classes["user-details"]}>
              <div className={classes["input-box"]}>
                <span className={classes.signinspan}>Password</span>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className={msg.error}>{errors.password}</p>
                )}
              </div>
            </div>

            <div className={classes.button}>
              <input type="submit" value="Login" />
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
  );
};

export default User_login;
