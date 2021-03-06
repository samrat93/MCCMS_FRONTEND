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
      <div className={classesDashboard["home-content"]}>
        <div className={classesDashboard["recent-sales"]}>
          <div className={classes.ContentBody}>
            <div className={classes.container_profile}>
              <ProfileComponent />
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
  );
};
export default PublicProfile;
