import React, { Fragment, useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DrawerComp from "./Drawer";
import { Outlet, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Footer from "./Footer";

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const toolbarStyle = {
    minHeight: "80px",
  };
  const styles = (theme) => ({
    label: {
      fontSize: "18px",
    },
  });
  const TabBigger = withStyles(styles)((props) => {
    return <Tab className={props.classes.label} {...props} />;
  });

  const classes = useState();
  return (
    <Fragment>
      <AppBar sx={{ background: "#063970" }} position="static">
        <Toolbar style={toolbarStyle}>
          <Link to="/Home">
            <AccountBalanceIcon sx={{ transform: "scale(2)", color: "#fff" }} />
          </Link>

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "3rem", paddingLeft: "10%" }}>
                MCCMS
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <React.Fragment>
              <Typography sx={{ transform: "scale(1.2)", paddingLeft: "10%" }}>
                Municipal Corporation's CMS
              </Typography>
              <Tabs
                sx={{
                  marginLeft: "auto",
                  marginRight: "5%",
                }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {/* <TabBigger label="Help" />
                <TabBigger label="Contact" />
                <Link to="/userlogin">
                  <TabBigger label="Login" />
                </Link> */}
              </Tabs>
              <Link to="/userlogin">
                <Button sx={{ marginLeft: "auto" }} variant="contained">
                  Login
                </Button>
              </Link>
              <Link to="/usersignup">
                <Button sx={{ marginLeft: "10px" }} variant="contained">
                  SignUp
                </Button>
              </Link>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      {/* {value === 1 && <Contact />} */}
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Header;
