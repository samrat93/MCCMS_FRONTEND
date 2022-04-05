import classes from "../../../css/public_css/publicDashboard.module.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Outlet, NavLink } from "react-router-dom";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/userActions/userAuthAction";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import HistoryIcon from "@mui/icons-material/History";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SecurityIcon from "@mui/icons-material/Security";
import { listProfileAction } from "../../../redux/actions/userActions/userProfileAction";
import { useEffect } from "react";

const PublicDashboard = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const ListProfileR = useSelector((state) => state.ListProfileR);
  const { plist } = ListProfileR;
  const current_user = userInfo.user_Info.id;
  const myProfile = plist?.find((pobj) => {
    return pobj.user === current_user;
  });
  useEffect(() => {
    if (userInfo) {
      dispatch(listProfileAction());
    }
  }, [userInfo, dispatch]);

  const logoutHandler = (e) => {
    dispatch(logout());
  };

  const adminAuth = () => {
    if (userInfo) {
      return (
        <div>
          <li>
            <NavLink
              onClick={logoutHandler}
              to="/Home"
              className={classes.links_name}
            >
              <LogoutOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Logout</span>
            </NavLink>
          </li>
        </div>
      );
    }
  };

  return (
    <div>
      <div className={classes.sidebar}>
        <div className={classes["logo-details"]}>
          <i className={classes["bxl-c-plus-plus"]}></i>
          <span className={classes.logo_name}>PUBLIC</span>
        </div>
        <ul className={classes["nav-links"]}>
          <li>
            <NavLink to="/public/dashboard">
              <DashboardOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Public Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/public/LodgeComplaint" className={classes.links_name}>
              <ReportProblemIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Lodge Complaint</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/public/ComplaintHistory"
              className={classes.links_name}
            >
              <HistoryIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Complaint History</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/public/PublicProfile" className={classes.links_name}>
              <AccountBoxIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/public/publicFeedback" className={classes.links_name}>
              <FeedbackOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Give Feedback</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/public/ChangePasswordPublic"
              className={classes.links_name}
            >
              <SecurityIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Change Password</span>
            </NavLink>
          </li>
          {adminAuth()}
        </ul>
      </div>
      <section className={classes["home-section"]}>
        <nav>
          <span className={classes.dashboard}>
            Municipal Corporation Complaint Management System
          </span>
          {/* <div className={classes["search-box"]}>
            <input type="text" placeholder="Search..." />
            <i className={classes["bx-search"]}>
              <SearchIcon />
            </i>
          </div> */}
          <div className={classes["profile-details"]}>
            <img src={myProfile?.user_image} alt="" />
            <span className={classes.admin_name}>
              {userInfo.user_Info.username}
            </span>
            {/* <KeyboardArrowDownIcon /> */}
          </div>
        </nav>
        dsfasdfasdfsad
        <Outlet />
      </section>
    </div>
  );
};

export default PublicDashboard;
