import { Fragment } from "react";
import classes from "../../css/layout_css/Layout.module.css";
import Navbar from "./NavBar";
// import HomePage from "../../pages/homepage";
const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.mainLayout}>{props.children}</main>
      {/* <HomePage /> */}
    </Fragment>
  );
};

export default Layout;
