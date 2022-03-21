// import axios from "axios";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../../../redux/actions/userActions/userAuthAction";
import classes from "../../../css/account_css/UserAccount.module.css";
import validate from "../../../components/accounts/user/validateUserSignup";
import msg from "../../../css/msg/msg.module.css";

const User_Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const [values, setValues] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    conpass: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/userlogin");
  //   }
  // }, [userInfo, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    const mess = validate(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      dispatch(userSignup(values));
      navigate("/userlogin");
    }
  };

  return (
    <div>
      <div className={classes.signupBody}>
        <div className={classes.container}>
          <div className={classes.title}>Registration</div>
          <div className={classes.content}>
            <form onSubmit={submitForm}>
              <div className={classes["user-details"]}>
                {/* {loading && <p>Loading...</p>} */}
                <div className={classes["input-box"]}>
                  <span className={classes.signinspan}>Username</span>
                  <input
                    type="text"
                    name="username"
                    value={values.username || ""}
                    onChange={handleChange}
                    placeholder="Enter your username"
                  />
                  {message.username && (
                    <p className={msg.error}>{message.username}</p>
                  )}
                  {error && error.username && (
                    <p className={msg.error}>{error.username}</p>
                  )}
                </div>

                <div className={classes["input-box"]}>
                  <span className={classes.signinspan}>Email</span>
                  <input
                    type="text"
                    name="email"
                    value={values.email || ""}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {message.email && (
                    <p className={msg.error}>{message.email}</p>
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
                    value={values.first_name || ""}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className={classes["input-box"]}>
                  <span className={classes.signinspan}>Last Name</span>
                  <input
                    type="text"
                    name="last_name"
                    value={values.last_name || ""}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                  />
                </div>

                <div className={classes["input-box"]}>
                  <span className={classes.signinspan}>Password</span>
                  <input
                    type="password"
                    name="password"
                    value={values.password || ""}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  {message.password && (
                    <p className={msg.error}>{message.password}</p>
                  )}
                  {error && error.password && (
                    <p className={msg.error}>{error.password}</p>
                  )}
                </div>

                <div className={classes["input-box"]}>
                  <span className={classes.signinspan}>Confirm Password</span>
                  <input
                    type="password"
                    name="conpass"
                    value={values.conpass || ""}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                  {message.conpass && (
                    <p className={msg.error}>{message.conpass}</p>
                  )}
                </div>
              </div>
              <div className={classes.button}>
                <input type="submit" value="Register" />
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
    </div>
  );
};

export default User_Signup;
