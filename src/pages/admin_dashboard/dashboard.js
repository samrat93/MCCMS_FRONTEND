import classes from "../../css/admin_css/AdminDashboard.module.css";
import PersonIcon from "@mui/icons-material/Person";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import UserList from "./UserList";

const AdminDashboardPage = () => {
  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["overview-boxes"]}>
          <div className={classes.box}>
            <div className={classes["right-side"]}>
              <div className={classes["box-topic"]}>Total User</div>
              <div className={classes.number}>40,876</div>
              <div className={classes.indicator}>
                <PersonIcon
                  sx={{
                    fontSize: "20px",
                    color: "#5579c4",
                  }}
                />
                <span className={classes.text}>Registered Till Now</span>
              </div>
            </div>
            <PersonIcon
              sx={{
                fontSize: "50px",
                color: "#87CEEB",
              }}
            />
          </div>
          <div className={classes.box}>
            <div className={classes["right-side"]}>
              <div className={classes["box-topic"]}>Total Complaint</div>
              <div className={classes.number}>38,876</div>
              <div className={classes.indicator}>
                <ReportProblemIcon
                  sx={{
                    fontSize: "20px",
                    color: "#900d09",
                  }}
                />
                <span className={classes.text}>Registered Here</span>
              </div>
            </div>
            <ReportProblemIcon
              sx={{
                fontSize: "50px",
                color: "#bc544b",
              }}
            />
          </div>
          <div className={classes.box}>
            <div className={classes["right-side"]}>
              <div className={classes["box-topic"]}>Total Feedback</div>
              <div className={classes.number}>$12,876</div>
              <div className={classes.indicator}>
                <FeedbackOutlinedIcon
                  sx={{
                    fontSize: "20px",
                    color: "#376457",
                  }}
                />
                <span className={classes.text}>Received Yet</span>
              </div>
            </div>
            <FeedbackOutlinedIcon
              sx={{
                fontSize: "50px",
                color: "#437c17",
              }}
            />
          </div>
          <div className={classes.box}>
            <div className={classes["right-side"]}>
              <div className={classes["box-topic"]}>Total Municipality</div>
              <div className={classes.number}>11,086</div>
              <div className={classes.indicator}>
                <AssuredWorkloadIcon
                  sx={{
                    fontSize: "20px",
                    color: "#376457",
                  }}
                />
                <span className={classes.text}>Registered Yet</span>
              </div>
            </div>
            <AssuredWorkloadIcon
              sx={{
                fontSize: "45px",
                color: "#437c17",
              }}
            />
          </div>
        </div>

        <UserList />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
