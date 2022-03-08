import { useState, useEffect } from "react";
import classes from "../../../css/account_css/UserAccount.module.css";
import msg from "../../../css/msg/msg.module.css";
import validate from "../../../components/accounts/user/validateUserLogin";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux/actions/userActions";

const User_login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;
  const submitForm = (e) => {
    e.preventDefault();
    const values = { username, password };

    const mess = validate(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      dispatch(userLogin(values));
    }
  };
  console.log(userInfo);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <div className={classes.signupBody}>
      <div className={classes.container}>
        <div className={classes.title}>Login</div>
        <div className={classes.content}>
          <form onSubmit={submitForm}>
            <div className={classes["user-details"]}>
              <div className={classes["input-box"]}>
                <span className={classes.signinspan}>Username</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {message.username && (
                  <p className={msg.error}>{message.username}</p>
                )}
                {error && error.login_error && (
                  <p className={msg.error}>{error.login_error}</p>
                )}
              </div>
            </div>

            <div className={classes["user-details"]}>
              <div className={classes["input-box"]}>
                <span className={classes.signinspan}>Password</span>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {message.password && (
                  <p className={msg.error}>{message.password}</p>
                )}
                {/* {error && <p className={msg.error}>{error}</p>} */}
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
