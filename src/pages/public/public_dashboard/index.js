import classes from "../../../css/public_css/publicDashboard.module.css";
import SearchIcon from "@mui/icons-material/Search";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Outlet, useLocation, useNavigate, NavLink } from "react-router-dom";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/userActions/userAuthAction";
import adminImg from "../../../Static/images/admin.jfif";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import HistoryIcon from "@mui/icons-material/History";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SecurityIcon from "@mui/icons-material/Security";

const PublicDashboard = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  //   console.log(userInfo.user_Info.is_superuser);

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
              to="/homepage"
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
          <span className={classes.logo_name}>MCCMS</span>
        </div>
        <ul className={classes["nav-links"]}>
          <li>
            <NavLink to="/public/index">
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
          {/* <li>
            <NavLink to="/admin/complaint-list" className={classes.links_name}>
              <AssuredWorkloadOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>View Complaint</span>
            </NavLink>
          </li> */}
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
          <div className={classes["search-box"]}>
            <input type="text" placeholder="Search..." />
            <i className={classes["bx-search"]}>
              <SearchIcon />
            </i>
          </div>
          <div className={classes["profile-details"]}>
            <img src={adminImg} alt="" />
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
