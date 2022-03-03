// import axios from "axios";
import validate from "../../components/accounts/user/validateUserSignup";
import useForm from "../../components/accounts/user/UseSignupForm";

import classes from "../../css/account_css/User-signup.module.css";
import msg from "../../css/msg/msg.module.css";

const User_Signup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes["form_container"]}>
          <form onSubmit={handleSubmit} noValidate>
            <div className={classes.heading}>
              <h2> User Registration</h2>
            </div>
            <div className={classes["form_wrap fullname"]}>
              <div className={classes["form_item"]}>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <p className={msg.error}>{errors.username}</p>
                )}
                <div className={classes.error} id="fname"></div>
              </div>
              <div className={classes["form_item"]}>
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className={msg.error}>{errors.email}</p>}
                <div className={classes.error} id="fname"></div>
              </div>
              <div className={classes["form_item"]}>
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                />

                <div className={classes.error} id="fname"></div>
              </div>
              <div className={classes["form_item"]}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                />

                <div className={classes.error} id="lname"></div>
              </div>
            </div>
            <div className={classes["form_wrap"]}>
              <div className={classes["form_item"]}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className={msg.error}>{errors.password}</p>
                )}
                <div className={classes.error} id="email"></div>
              </div>
            </div>
            <div className={classes["form_wrap"]}>
              <div className={classes["form_item"]}>
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="conpass"
                  value={values.conpass}
                  onChange={handleChange}
                />
                {errors.conpass && (
                  <p className={msg.error}>{errors.conpass}</p>
                )}
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
