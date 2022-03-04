import React from "react";
import classes from "../../../css/account_css/UserAccount.module.css";
// import msg from "../../../css/msg/msg.module.css";
import { Link } from "react-router-dom";

const User_login = () => {
  return (
    <div className={classes.signupBody}>
      <div className={classes.container}>
        <div className={classes.title}>Login</div>
        <div className={classes.content}>
          <form>
            <div className={classes["user-details"]}>
              <div className={classes["input-box"]}>
                <span className="details">Username</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div className={classes["user-details"]}>
              <div className={classes["input-box"]}>
                <span className="details">Username</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div className={classes.button}>
              <input type="submit" value="Login" />
            </div>
            <div className={classes["input-box"]}>
              Not Registered Yet. <Link to="/usersignup"> Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User_login;
