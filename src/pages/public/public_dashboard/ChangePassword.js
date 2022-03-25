import classesDashboard from "../../../css/public_css/publicForms.module.css";
import classes from "../../../css/public_css/publicDashboard.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import Validate from "../../../components/accounts/user/validateChangePasswordUser";
import { ChangePasswordUserAction } from "../../../redux/actions/userActions/changePasswordUserAction";
import msg from "../../../css/msg/msg.module.css";

const ChangePasswordPublic = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const changePasswordUserR = useSelector((state) => state.changePasswordUserR);
  const { loading, error, success } = changePasswordUserR;

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
    const mess = Validate(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      dispatch(ChangePasswordUserAction(values));
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
            <div className={classes.ContentBody}>
              <div>
                <div className={classesDashboard.ChangePasswordBody}>
                  <div className={classesDashboard.title}>Change Password</div>
                  <div className={classesDashboard.content}>
                    <form onSubmit={submitHandler}>
                      <div className={classesDashboard["user-details"]}>
                        <div className={classesDashboard["input-box-login"]}>
                          <span className={classesDashboard.signinspan}>
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

                      <div className={classesDashboard["user-details"]}>
                        <div className={classesDashboard["input-box-login"]}>
                          <span className={classesDashboard.signinspan}>
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
                          {error && error.npassword1 && (
                            <p className={msg.error}>{error.npassword1}</p>
                          )}
                          {error && error.npassword2 && (
                            <p className={msg.error}>{error.npassword2}</p>
                          )}
                          {error && error.npassword3 && (
                            <p className={msg.error}>{error.npassword3}</p>
                          )}
                        </div>
                      </div>
                      <div className={classesDashboard["user-details"]}>
                        <div className={classesDashboard["input-box-login"]}>
                          <span className={classesDashboard.signinspan}>
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

                          {success && (
                            <p className={msg.success}>
                              {"Password Change Successfully"}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className={classesDashboard["user-details"]}>
                        <div className={classesDashboard["input-box-login"]}>
                          <div className={classesDashboard.button}>
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
    </div>
  );
};
export default ChangePasswordPublic;
