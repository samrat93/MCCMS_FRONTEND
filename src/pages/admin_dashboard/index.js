import classes from "../../css/admin_css/AdminDashboard.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
// import UserList from "./UserList";
import { Outlet, useLocation, useNavigate, NavLink } from "react-router-dom";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import adminImg from "../../Static/images/admin.jfif";

const AdminDashboard = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  console.log("jjjjjjjjjjjj", userInfo.user_Info.username);

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
            <NavLink to="/admin/userlist">
              <DashboardOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/userlist" className={classes.links_name}>
              <GroupOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>User List</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/municipalityList"
              className={classes.links_name}
            >
              <AssuredWorkloadOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Municipality list</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-country" className={classes.links_name}>
              <FlagOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Add Country</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-state" className={classes.links_name}>
              <LocationCityOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Add State</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/complaint-list" className={classes.links_name}>
              <AssuredWorkloadOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>View Complaint</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-country" className={classes.links_name}>
              <FeedbackOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>View Feedback</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/change-password" className={classes.links_name}>
              <SettingsOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff", marginLeft: "15px" }}
              />
              <span className={classes.links_name}>Setting</span>
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
        <Outlet />
      </section>
    </div>
  );
};

export default AdminDashboard;
