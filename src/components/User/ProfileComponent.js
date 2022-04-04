import { Fragment } from "react";
import classes from "../../css/public_css/publicForms.module.css";
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <Fragment>
      <div className={classes["input-box"]}>
        <span className={classes.signinspan}>Your Username</span>
        <input
          type="text"
          name="username"
          value={userInfo.user_Info.username}
          // onChange={handleChange}
          disabled
        />
      </div>
      <div className={classes["input-box"]}>
        <span className={classes.signinspan}>Your Email</span>
        <input
          type="text"
          name="email"
          value={userInfo.user_Info.email}
          // onChange={handleChange}
          disabled
        />
      </div>
      <div className={classes["input-box"]}>
        <span className={classes.signinspan}>First Name</span>
        <input
          type="text"
          name="first_name"
          value={userInfo.user_Info.first_name}
          // onChange={handleChange}
          disabled
        />
      </div>
      <div className={classes["input-box"]}>
        <span className={classes.signinspan}>Last Name</span>
        <input
          type="text"
          name="last_name"
          value={userInfo.user_Info.last_name}
          // onChange={handleChange}
          disabled
        />
      </div>
    </Fragment>
  );
};
export default ProfileComponent;
