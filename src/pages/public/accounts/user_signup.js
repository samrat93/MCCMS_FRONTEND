// import axios from "axios";
import validate from "../../../components/accounts/user/validateUserSignup";
import useForm from "../../../components/accounts/user/UseSignupForm";
import { Link } from "react-router-dom";
import classes from "../../../css/account_css/UserAccount.module.css";
import msg from "../../../css/msg/msg.module.css";

const User_Signup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className={classes.signupBody}>
      <div className={classes.container}>
        <div className={classes.title}>Registration</div>
        <div className={classes.content}>
          <form onSubmit={handleSubmit} noValidate>
            <div className={classes["user-details"]}>
              <div className={classes["input-box"]}>
                <span className="signinspan">Username</span>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className={msg.error}>{errors.username}</p>
                )}
              </div>

              <div className={classes["input-box"]}>
                <span className="signinspan">Email</span>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <p className={msg.error}>{errors.email}</p>}
              </div>

              <div className={classes["input-box"]}>
                <span className="signinspan">First Name</span>
                <input
                  type="text"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </div>
              <div className={classes["input-box"]}>
                <span className="signinspan">Last Name</span>
                <input
                  type="text"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>

              <div className={classes["input-box"]}>
                <span className="signinspan">Password</span>
                <input
                  type="password"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className={msg.error}>{errors.password}</p>
                )}
              </div>

              <div className={classes["input-box"]}>
                <span className="signinspan">Confirm Password</span>
                <input
                  type="password"
                  name="last_name"
                  value={values.conpass}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
                {errors.conpass && (
                  <p className={msg.error}>{errors.conpass}</p>
                )}
              </div>
            </div>
            <div className={classes.button}>
              <input type="submit" value="Register" />
            </div>
            <div className={classes["input-box"]}>
              Already Registered ? <Link to="/userlogin"> Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User_Signup;
