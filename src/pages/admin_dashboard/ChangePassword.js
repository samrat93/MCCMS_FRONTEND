import classes from "../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../css/account_css/UserAccount.module.css";

const ChangePassword = () => {
  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>Change Password</div>
                <div className={formclasses.content}>
                  <form>
                    <div className={formclasses["user-details"]}>
                      <div className={formclasses["input-box-login"]}>
                        <span className={formclasses.signinspan}>
                          Old Username
                        </span>
                        <input
                          type="password"
                          name="old_password"
                          placeholder="Enter your old password"
                        />
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
                          placeholder="Enter your New password"
                        />

                        {/* {error && <p className={msg.error}>{error}</p>} */}
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
                          placeholder="Confirm your New password"
                        />

                        {/* {error && <p className={msg.error}>{error}</p>} */}
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
