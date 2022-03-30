import formclasses from "../../css/account_css/UserAccount.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAprroval } from "../../redux/actions/adminActions/ManageUserAction";
import msg from "../../css/msg/msg.module.css";
import chkboxcss from "../../css/layout_css/CheckBox.module.css";
// import swal from "sweetalert";
import { readalluser } from "../../redux/actions/adminActions/ManageUserAction";
import { useNavigate } from "react-router-dom";

const UserVerifyFormContent = ({ userData }) => {
  // console.log(userData);
  const [is_active, setIs_Active] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const userApproval = useSelector((state) => state.userApproval);
  const { loading, error, success } = userApproval;

  useEffect(() => {
    if (userInfo) {
      dispatch(readalluser());
    } else {
      navigate("/userlogin");
    }
  }, [dispatch, userInfo, success]);

  const UserVerifyFormHandler = (e) => {
    e.preventDefault();
    const id = userData.id;
    dispatch(UserAprroval({ is_active, id: id }));
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
                    name="verify"
                    checked={is_active}
                    onChange={(e) => setIs_Active(e.target.checked)}
                  />
                  <span className={chkboxcss.toggle_label}>
                    <span className={chkboxcss.toggle_text}>Verify User</span>
                  </span>
                </label>
              </div>
              {error ? <p className={msg.error}>{error}</p> : ""}
              {success && (
                <p className={msg.success}>{"User Verified Successfully."}</p>
              )}
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
