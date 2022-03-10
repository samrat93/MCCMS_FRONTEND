import classes from "../../css/admin_css/AdminDashboard.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
// import UserList from "./UserList";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <div>
      <div className={classes.sidebar}>
        <div className={classes["logo-details"]}>
          <i className={classes["bx bxl-c-plus-plus"]}></i>
          <span className={classes.logo_name}>MCCMS</span>
        </div>
        <ul className={classes["nav-links"]}>
          <li>
            <a href="#">
              <DashboardOutlinedIcon />
              <span className={classes.links_name}>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={classes["bx bx-box"]}></i>
              {/* <span className={classes.links_name}>User List</span> */}
              <Link
                to="/adminDashboard/userlist"
                className={classes.links_name}
              >
                UserList
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={classes["bx bx-list-ul"]}></i>
              {/* <span className={classes.links_name}>Municipality list</span> */}
              <Link
                to="/adminDashboard/municipalityList"
                className={classes.links_name}
              >
                Municipality list
              </Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={classes["bx bx-pie-chart-alt-2"]}></i>
              <span className={classes.links_name}>Add Country</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={classes["bx bx-coin-stack"]}></i>
              <span className={classes.links_name}>add State</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={classes["bx bx-book-alt"]}></i>
              <span className={classes.links_name}>View Complaint</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={classes["bx bx-user"]}></i>
              <span className={classes.links_name}>View Feedback</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={classes["bx bx-message"]}></i>
              <span className={classes.links_name}>Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={classes["bx bx-heart"]}></i>
              <span className={classes.links_name}>Favrorites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={classes["bx bx-cog"]}></i>
              <span className={classes.links_name}>Setting</span>
            </a>
          </li>
          <li className="log_out">
            <a href="#">
              <i className={classes["bx bx-log-out"]}></i>
              <span className={classes.links_name}>Log out</span>
            </a>
          </li>
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
            <img src="images/profile.jpg" alt="" />
            <span className={classes.admin_name}>Prem Shahi</span>
            <KeyboardArrowDownIcon />
          </div>
        </nav>
        <Outlet />
      </section>
    </div>
  );
};

export default AdminDashboard;
