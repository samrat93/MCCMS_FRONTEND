import classes from "../../css/admin_css/AdminDashboard.module.css";
import PersonIcon from "@mui/icons-material/Person";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ChartAndGraph from "./ChartsAndGraphs";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { listComplaintAction } from "../../redux/actions/userActions/complaintAction";
import { listFeedbackAction } from "../../redux/actions/userActions/FeedbackAction";
import { readalluser } from "../../redux/actions/adminActions/ManageUserAction";
import VerifiedIcon from "@mui/icons-material/Verified";

const AdminDashboardPage = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  const Page = 1;
  const userObj = users?.results;
  const listComplaintRedu = useSelector((state) => state.listComplaintRedu);
  const { compList } = listComplaintRedu;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const usersCount = users?.count;
  console.log("user-count", users);
  const complaintCount = compList?.length;

  const ListFeedbackR = useSelector((state) => state.ListFeedbackR);
  const { feedbacks } = ListFeedbackR;

  const activeUser = userObj?.filter((data) => {
    return data?.is_active === true;
  });
  const activeUserCount = activeUser?.length;

  const feedbackCount = feedbacks?.length;

  useEffect(() => {
    if (userInfo) {
      dispatch(listComplaintAction());
      dispatch(listFeedbackAction());
      dispatch(readalluser({ Page: Page }));
    }
  }, [dispatch, userInfo]);

  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["overview-boxes"]}>
          <div className={classes.box}>
            <div className={classes["right-side"]}>
              <div className={classes["box-topic"]}>Total User</div>
              <div className={classes.number}>{usersCount}</div>
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
                color: "#5579c4",
              }}
            />
          </div>
          <div className={classes.box}>
            <div className={classes["right-side"]}>
              <div className={classes["box-topic"]}>Total Complaint</div>
              <div className={classes.number}>{complaintCount}</div>
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
              <div className={classes.number}>{feedbackCount}</div>
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
          {/* <div className={classes.box}>
            <div className={classes["right-side"]}>
              <div className={classes["box-topic"]}>Total Active User</div>
              <div className={classes.number}>{activeUserCount}</div>
              <div className={classes.indicator}>
                <VerifiedIcon
                  sx={{
                    fontSize: "20px",
                    color: "#0096FF",
                  }}
                />
                <span className={classes.text}>In This System</span>
              </div>
            </div>
            <VerifiedIcon
              sx={{
                fontSize: "45px",
                color: "#0096FF",
              }}
            />
          </div> */}
        </div>

        <ChartAndGraph />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
