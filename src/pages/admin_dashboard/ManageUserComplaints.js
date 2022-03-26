import classes from "../../css/admin_css/AdminDashboard.module.css";
import PersonIcon from "@mui/icons-material/Person";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import { Outlet, NavLink } from "react-router-dom";

const ManageUserComplaint = () => {
  return (
    <>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.title}>Users Complaint </div>
            <div className={classes["overview-boxes"]}>
              <div className={classes.box2}>
                <div className={classes["right-side"]}>
                  <div className={classes["box-topic2"]}>
                    Total Pending Complaint
                  </div>
                  <div className={classes.number}>555</div>
                  <div className={classes.indicator}>
                    <AssignmentLateIcon
                      sx={{
                        fontSize: "20px",
                        color: "#900d09",
                        marginRight: "5px",
                      }}
                    />
                    <span className={classes.text}>Not Yet Processed</span>
                  </div>
                </div>
                <NavLink to="pendingComplaints">
                  <AssignmentLateIcon
                    sx={{
                      fontSize: "50px",
                      color: "#bc544b",
                    }}
                  />
                </NavLink>
              </div>

              <div className={classes.box2}>
                <div className={classes["right-side"]}>
                  <div className={classes["box-topic2"]}>
                    Complaint On Processing
                  </div>
                  <div className={classes.number}>$12,876</div>
                  <div className={classes.indicator}>
                    <PendingActionsIcon
                      sx={{
                        fontSize: "20px",
                        color: "#376457",
                        marginRight: "5px",
                      }}
                    />
                    <span className={classes.text}>Process Ongoing </span>
                  </div>
                </div>
                <NavLink to="processingComplaints">
                  <PendingActionsIcon
                    sx={{
                      fontSize: "50px",
                      color: "#0096FF",
                    }}
                  />
                </NavLink>
              </div>
              <div className={classes.box2}>
                <div className={classes["right-side"]}>
                  <div className={classes["box-topic2"]}>
                    Total Closed Complaint
                  </div>
                  <div className={classes.number}>11,086</div>
                  <div className={classes.indicator}>
                    <AssignmentTurnedInIcon
                      sx={{
                        fontSize: "20px",
                        color: "#376457",
                        marginRight: "5px",
                      }}
                    />
                    <span className={classes.text}>Processed Yet</span>
                  </div>
                </div>
                <NavLink to="closedComplaints">
                  <AssignmentTurnedInIcon
                    sx={{
                      fontSize: "50px",
                      color: "#437c17",
                    }}
                  />
                </NavLink>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUserComplaint;
