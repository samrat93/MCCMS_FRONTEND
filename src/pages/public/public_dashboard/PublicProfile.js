import classes from "../../../css/public_css/publicForms.module.css";
import classesDashboard from "../../../css/public_css/publicDashboard.module.css";
const PublicProfile = () => {
  return (
    <div>
      <div className={classesDashboard["home-content"]}>
        <div className={classesDashboard["sales-boxes"]}>
          <div className={classesDashboard["recent-sales"]}>
            <div className={classes.ContentBody}>
              <div className={classes.container}>
                <div className={classes.title}>Register Your Profile</div>
                <div className={classes.content}>
                  <form>
                    <div className={classes["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>
                          Your Username
                        </span>
                        <input
                          type="text"
                          name="username"
                          // value={values.email || ""}
                          // onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Your Email</span>
                        <input
                          type="text"
                          name="email"
                          // value={values.email || ""}
                          // onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Frirst Name</span>
                        <input
                          type="text"
                          name="first_name"
                          // value={values.email || ""}
                          // onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Last Name</span>
                        <input
                          type="text"
                          name="last_name"
                          // value={values.email || ""}
                          // onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Contact No</span>
                        <input
                          type="text"
                          name="contact_no"
                          // value={values.email || ""}
                          // onChange={handleChange}
                          placeholder="Enter your contact number"
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Pincode</span>
                        <input
                          type="text"
                          name="pincode"
                          // value={values.email || ""}
                          // onChange={handleChange}
                          placeholder="Enter your pincode"
                        />
                      </div>
                    </div>
                    <div className={classes["user-details"]}>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Gender</span>
                        <select name="gender" className={classes.selectValue}>
                          <option>Select your gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Country</span>
                        <select
                          name="category_id"
                          className={classes.selectValue}
                        >
                          <option>Select Country</option>
                          <option>samrat</option>
                        </select>
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>State</span>
                        <select name="state_id" className={classes.selectValue}>
                          <option>Select State</option>
                          <option>samrat</option>
                        </select>
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>
                          Upload Your Image
                        </span>
                        <input
                          className={classes["file-upload"]}
                          type="file"
                          name="user_name"
                          // value={values.email || ""}
                          // onChange={handleChange}
                        />
                      </div>

                      <div className={classes["input-textarea"]}>
                        <span className={classes.signinspan}>
                          Address Details
                        </span>
                        <textarea
                          className={classes.textarea}
                          name="address"
                          value=""
                        />
                      </div>
                    </div>
                    <div className={classes.btndiv}>
                      <div className={classes.singleBtnDiv}>
                        <div className={classes.button}>
                          <input type="submit" value="Save Details" />
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
export default PublicProfile;
