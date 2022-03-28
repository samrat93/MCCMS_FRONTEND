import classes from "../../css/admin_css/AdminDashboard.module.css";
import PersonIcon from "@mui/icons-material/Person";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import { Outlet, NavLink } from "react-router-dom";
// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ManageUserComplaint = () => {
  const listComplaintRedu = useSelector((state) => state.listComplaintRedu);
  const { compList } = listComplaintRedu;

  const pending = compList?.filter((data) => {
    return data.complaint_status === "1";
  }).length;

  const processing = compList?.filter((data) => {
    return data.complaint_status === "2";
  }).length;

  const complete = compList?.filter((data) => {
    return data.complaint_status === "3";
  }).length;

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
                  <div className={classes.number}>{pending}</div>
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
                      color: "#e74c3c",
                    }}
                  />
                </NavLink>
              </div>

              <div className={classes.box2}>
                <div className={classes["right-side"]}>
                  <div className={classes["box-topic2"]}>
                    Total Ongoing Complaint
                  </div>
                  <div className={classes.number}>{processing}</div>
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
                      color: "#fc8d0f",
                    }}
                  />
                </NavLink>
              </div>
              <div className={classes.box2}>
                <div className={classes["right-side"]}>
                  <div className={classes["box-topic2"]}>
                    Total Closed Complaint
                  </div>
                  <div className={classes.number}>{complete}</div>
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
