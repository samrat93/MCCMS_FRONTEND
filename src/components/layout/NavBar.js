import classes from "../../css/layout_css/NavBar.module.css";
import logo from "../../Static/images/logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions/userAuthAction";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    dispatch(logout());
  };

  // const userAuth = () => {
  //   if (!userInfo) {
  //     return (
  //       <li>
  //         <NavLink to="/userlogin">Login</NavLink>
  //       </li>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <li>
  //           <Link onClick={logoutHandler} to="/homepage">
  //             Logout
  //           </Link>
  //         </li>
  //         {/* <li>
  //           <Link to="/adminDashboard">Dashboard</Link>
  //         </li> */}
  //       </>
  //     );
  //   }
  // };

  return (
    <div>
      <nav className={classes["main-nav"]}>
        {/* 1st logo part  */}
        <div className={classes.logo}>
          <img
            className={classes.logo}
            src={logo}
            width="200"
            height="80"
            alt="logo"
          ></img>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? classes["mobile-menu-link"] : classes["menu-link"]
          }
        >
          <ul>
            <li>
              <NavLink to="/homepage">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/userlogin">Login</NavLink>
            </li>
          </ul>
        </div>

        <div className={classes["social-media"]}>
          {/* hamburget menu start  */}
          <div className={classes["hamburger-menu"]}>
            <a href="#/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
