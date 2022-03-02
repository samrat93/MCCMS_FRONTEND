import { NavLink } from "react-router-dom";
import classes from "../../css/layout_css/MainNavigation.module.css";
import logo from "../../Static/images/logo.png";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} width="200" height="80"></img>
      <div className={classes.logo}>MCCM</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/user-login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              User Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-signup"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              User Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
