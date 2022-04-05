import { Fragment } from "react";
import classes from "../../css/public_css/publicForms.module.css";
import classesDashboard from "../../css/public_css/publicDashboard.module.css";

const ProfileImageComponent = () => {
  return (
    <>
      <div className={classesDashboard["home-content"]}>
        <div className={classesDashboard["sales-boxes"]}>
          <div className={classesDashboard["recent-sales"]}>
            <div className={classes["user-details"]}>
              <div className={classes["input-box"]}>
                <div className={classes.img_wrapper}>
                  <img
                    src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"
                    className={classes.image_cover}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileImageComponent;
