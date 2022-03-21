import classes from "../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../css/account_css/UserAccount.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { ChangePasswordAction } from "../../redux/actions/adminActions/ChangePasswordAction";
import msg from "../../css/msg/msg.module.css";
import validate from "../../components/admin/validatePasswordChange";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const passwordChangeRedu = useSelector((state) => state.passwordChangeRedu);
  const { loading, error, success } = passwordChangeRedu;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [values, setValues] = useState({
    old_password: "",
    new_password: "",
    conf_password: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const mess = validate(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      dispatch(ChangePasswordAction(values));
      setValues({
        old_password: "",
        new_password: "",
        conf_password: "",
      });
    }
  };
  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>Change Password</div>
                <div className={formclasses.content}>
                  <form onSubmit={submitHandler}>
                    <div className={formclasses["user-details"]}>
                      <div className={formclasses["input-box-login"]}>
                        <span className={formclasses.signinspan}>
                          Old Password
                        </span>
                        <input
                          type="password"
                          name="old_password"
                          placeholder="Enter your old password"
                          value={values.old_password}
                          onChange={handleChange}
                        />
                        {message.old_password && (
                          <p className={msg.error}>{message.old_password}</p>
                        )}
                        {error && error.opassword && (
                          <p className={msg.error}>{error.opassword}</p>
                        )}
                      </div>
                    </div>

                    <div className={formclasses["user-details"]}>
                      <div className={formclasses["input-box-login"]}>
                        <span className={formclasses.signinspan}>
                          New Password
                        </span>
                        <input
                          type="password"
                          name="new_password"
                          value={values.new_password}
                          placeholder="Enter your New password"
                          onChange={handleChange}
                        />

                        {message.new_password && (
                          <p className={msg.error}>{message.new_password}</p>
                        )}
                        {error && error.npassword && (
                          <p className={msg.error}>{error.npassword}</p>
                        )}
                      </div>
                    </div>
                    <div className={formclasses["user-details"]}>
                      <div className={formclasses["input-box-login"]}>
                        <span className={formclasses.signinspan}>
                          Confirm Password
                        </span>
                        <input
                          type="password"
                          name="conf_password"
                          value={values.conf_password}
                          placeholder="Confirm your New password"
                          onChange={handleChange}
                        />

                        {message.conf_password && (
                          <p className={msg.error}>{message.conf_password}</p>
                        )}
                        {error && error.cpassword && (
                          <p className={msg.error}>{error.cpassword}</p>
                        )}
                        {success && (
                          <p className={msg.success}>
                            {"Password Change Successfully"}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={formclasses["user-details"]}>
                      <div className={formclasses["input-box-login"]}>
                        <div className={formclasses.button}>
                          <input type="submit" value="Change Password" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
