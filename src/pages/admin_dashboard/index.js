import classes from "../../css/admin_css/AdminDashboard.module.css";
import SearchIcon from "@mui/icons-material/Search";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
// import UserList from "./UserList";
import { Outlet, useLocation, useNavigate, NavLink } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions/userAuthAction";
import adminImg from "../../Static/images/admin.jfif";
import { useEffect } from "react";

const AdminDashboard = () => {
  const navigation = useNavigate();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      navigation("/userlogin");
    }
  }, [userInfo, navigation]);

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
              <LogoutOutlinedIcon sx={{ fontSize: "25px", color: "#fff" }} />
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
          <span className={classes.logo_name}>ADMIN</span>
        </div>
        <ul className={classes["nav-links"]}>
          <li>
            <NavLink to="/admin/dashboard">
              <DashboardOutlinedIcon sx={{ fontSize: "25px", color: "#fff" }} />
              <span className={classes.links_name}>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/userlist" className={classes.links_name}>
              <GroupOutlinedIcon sx={{ fontSize: "25px", color: "#fff" }} />
              <span className={classes.links_name}>User List</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/manageUserComplaint/pendingComplaints"
              className={classes.links_name}
            >
              <ErrorIcon sx={{ fontSize: "25px", color: "#fff" }} />
              <span className={classes.links_name}>Manage Complaint</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/add-country" className={classes.links_name}>
              <FlagOutlinedIcon sx={{ fontSize: "25px", color: "#fff" }} />
              <span className={classes.links_name}>Add Country</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/add-state" className={classes.links_name}>
              <LocationCityOutlinedIcon
                sx={{ fontSize: "25px", color: "#fff" }}
              />
              <span className={classes.links_name}>Add State</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/userFeedbackView"
              className={classes.links_name}
            >
              <FeedbackOutlinedIcon sx={{ fontSize: "25px", color: "#fff" }} />
              <span className={classes.links_name}>View Feedback</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/addComplaintCategory"
              className={classes.links_name}
            >
              <CategoryIcon sx={{ fontSize: "25px", color: "#fff" }} />
              <span className={classes.links_name}>Add Category</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/addComplaintSubCategory"
              className={classes.links_name}
            >
              <CategoryIcon sx={{ fontSize: "25px", color: "#fff" }} />
              <span className={classes.links_name}>Add Sub Category</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/change-password" className={classes.links_name}>
              <SecurityIcon sx={{ fontSize: "25px", color: "#fff" }} />
              <span className={classes.links_name}>Change Password</span>
            </NavLink>
          </li>
          {adminAuth()}
        </ul>
      </div>
      <section className={classes["home-section"]}>
        <nav>
          <span className={classes.dashboard}>Municipal Corporation CMS</span>
          <div className={classes["profile-details"]}>
            <img src={adminImg} alt="" />
            <span className={classes.admin_name}>
              {userInfo.user_Info.username}
            </span>
          </div>
        </nav>
        <Outlet />
      </section>
    </div>
  );
};

export default AdminDashboard;
