import React from "react";
import classes from "../../css/account_css/User-signup.module.css";

const User_login = () => {
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes["form_container"]}>
          <form name="form">
            <div className={classes.heading}>
              <h2> User Login</h2>
            </div>
            <div className={classes["form_wrap fullname"]}>
              <div className={classes["form_item"]}>
                <label>Username</label>
                <input type="text" required />
                <div className={classes.error} id="fname"></div>
              </div>
            </div>
            <div className={classes["form_wrap"]}>
              <div className={classes["form_item"]}>
                <label>Password</label>
                <input type="password" required />
                <div className={classes.error} id="email"></div>
              </div>
            </div>
            <div className={classes["form_item"]}>
              <input className={classes.btn} type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User_login;
