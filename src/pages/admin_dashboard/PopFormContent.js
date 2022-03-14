import formclasses from "../../css/account_css/UserAccount.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAprroval } from "../../redux/actions/adminActions";
import msg from "../../css/msg/msg.module.css";
import chkboxcss from "../../css/layout_css/CheckBox.module.css";
// import validate from "../../components/admin/userVerifyValidator";

const UserVerifyFormContent = ({ userData }) => {
  const [is_active, setIs_Active] = useState("");

  // const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const userApproval = useSelector((state) => state.userApproval);
  const { loading, error, userInfo } = userApproval;

  useEffect(() => {});

  const UserVerifyFormHandler = (e) => {
    e.preventDefault();
    dispatch(UserAprroval(is_active));
  };

  return (
    userData && (
      <div>
        <div className={formclasses.container}>
          <div className={formclasses.title}>User Verification Form</div>
          <div className={formclasses.content}>
            <form onSubmit={UserVerifyFormHandler}>
              <div className={formclasses["user-details"]}>
                {/* {loading && <p>Loading...</p>} */}
                <div className={formclasses["input-box"]}>
                  <span className={formclasses.signinspan}>Username</span>
                  <input
                    type="text"
                    name="username"
                    disabled
                    value={userData.username}
                  />
                </div>

                <div className={formclasses["input-box"]}>
                  <span className={formclasses.signinspan}>Email</span>
                  <input
                    type="text"
                    name="email"
                    disabled
                    value={userData.email}
                  />
                </div>

                <div className={formclasses["input-box"]}>
                  <span className={formclasses.signinspan}>First Name</span>
                  <input
                    type="text"
                    name="first_name"
                    disabled
                    value={userData.first_name}
                  />
                </div>
                <div className={formclasses["input-box"]}>
                  <span className={formclasses.signinspan}>Last Name</span>
                  <input
                    type="text"
                    name="last_name"
                    disabled
                    value={userData.last_name}
                  />
                </div>

                <label className={chkboxcss.toggle}>
                  <input
                    className={chkboxcss.toggle_input}
                    type="checkbox"
                    name="is_active"
                    defaultChecked={is_active}
                    onChange={(e) => setIs_Active(e.target.value)}
                  />
                  <span className={chkboxcss.toggle_label}>
                    <span className={chkboxcss.toggle_text}>Verify User</span>
                  </span>
                </label>
                {/* {message.is_active && (
                  <p className={msg.error}>{message.is_active}</p>
                )}*/}
              </div>
              {error ? <p className={msg.error}>{error}</p> : ""}
              <div className={formclasses.button}>
                <input type="submit" value="Save Changes" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default UserVerifyFormContent;
