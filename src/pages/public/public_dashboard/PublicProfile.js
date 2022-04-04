import classes from "../../../css/public_css/publicForms.module.css";
import classesDashboard from "../../../css/public_css/publicDashboard.module.css";
import ProfileComponent from "../../../components/User/ProfileComponent";
import ProfileUpdateForm from "./ProfileUpdateForm";
import UpdateProfileContent from "./UpdateProfileContent";
import { useState, Fragment } from "react";

const PublicProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* {myProfile ? ( */}
      {/* <Fragment> */}
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
                      <ProfileComponent />
                    </div>
                    <div className={classes.btndiv}>
                      <div className={classes.singleBtnDiv}>
                        <div className={classes.button}>
                          <input
                            type="button"
                            onClick={togglePopup}
                            value="Add Profile"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  {isOpen && (
                    <Fragment>
                      <ProfileUpdateForm
                        content={<UpdateProfileContent />}
                        handleClose={togglePopup}
                      />
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Fragment>
      ) : (
        <p>NO Profile</p>
      )} */}
    </div>
  );
};
export default PublicProfile;
