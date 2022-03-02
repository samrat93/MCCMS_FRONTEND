import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "../../css/account_css/User-signup.module.css";

const User_Signup = () => {
  let history = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const registerUserHandler = async (e) => {
    e.preventDefault();
    let formField = new FormData();
    formField.append("username", username);
    formField.append("email", email);
    formField.append("firstname", firstname);
    formField.append("lastname", lastname);
    formField.append("password", password);

    const url = "http://127.0.0.1:8000/api/register/";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes["form_container"]}>
          <form onSubmit={registerUserHandler} name="form">
            <div className={classes.heading}>
              <h2> User Registration</h2>
            </div>
            <div className={classes["form_wrap fullname"]}>
              <div className={classes["form_item"]}>
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className={classes.error} id="fname"></div>
              </div>
              <div className={classes["form_item"]}>
                <label>Email Address</label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className={classes.error} id="fname"></div>
              </div>
              <div className={classes["form_item"]}>
                <label>First Name</label>
                <input
                  type="text"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                <div className={classes.error} id="fname"></div>
              </div>
              <div className={classes["form_item"]}>
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                <div className={classes.error} id="lname"></div>
              </div>
            </div>
            <div className={classes["form_wrap"]}>
              <div className={classes["form_item"]}>
                <label>Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className={classes.error} id="email"></div>
              </div>
            </div>
            <div className={classes["form_wrap"]}>
              <div className={classes["form_item"]}>
                <label>Confirm Password</label>
                <input type="password" required />
                <div className={classes.error} id="phone"></div>
              </div>
            </div>
            <div className={classes["form_item"]}>
              <input className={classes.btn} type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User_Signup;
