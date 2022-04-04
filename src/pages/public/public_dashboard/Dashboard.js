import classes from "../../../css/public_css/publicDashboard.module.css";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { listComplaintAction } from "../../../redux/actions/userActions/complaintAction";
import GraphsAndChart from "./GraphsAndChart";

const PublicDashboardPage = () => {
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const listComplaintRedu = useSelector((state) => state.listComplaintRedu);
  const { compList } = listComplaintRedu;

  const current_user = userInfo.user_Info.id;
  const newComplaintList = compList?.filter((data) => {
    return data.user_id === current_user;
  });

  const pending = newComplaintList?.filter((data) => {
    return data.complaint_status === "1";
  }).length;

  const processing = newComplaintList?.filter((data) => {
    return data.complaint_status === "2";
  }).length;

  const complete = newComplaintList?.filter((data) => {
    return data.complaint_status === "3";
  }).length;

  useEffect(() => {
    if (userInfo) {
      dispatch(listComplaintAction());
    }
  }, [userInfo, dispatch]);

  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["overview-boxes"]}>
          <div className={classes.box}>
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
                <span className={classes.text}>Not Processed Yet</span>
              </div>
            </div>

            <AssignmentLateIcon
              sx={{
                fontSize: "50px",
                color: "#e74c3c",
              }}
            />
          </div>

          <div className={classes.box}>
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
                <span className={classes.text}>Process Still Ongoing </span>
              </div>
            </div>

            <PendingActionsIcon
              sx={{
                fontSize: "50px",
                color: "#fc8d0f",
              }}
            />
          </div>
          <div className={classes.box}>
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
                <span className={classes.text}>Closed Yet</span>
              </div>
            </div>

            <AssignmentTurnedInIcon
              sx={{
                fontSize: "50px",
                color: "#437c17",
              }}
            />
          </div>
        </div>
        <GraphsAndChart />
      </div>
    </div>
  );
};

export default PublicDashboardPage;
