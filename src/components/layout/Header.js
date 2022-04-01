import React, { useState } from "react";
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
import {
  Outlet,
  useLocation,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";
import Footer from "./Footer";
import Contact from "../../pages/Contact";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }} position="static">
        <Toolbar>
          <AccountBalanceIcon sx={{ transform: "scale(2)" }} />

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "3rem", paddingLeft: "10%" }}>
                MCCMS
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <React.Fragment>
              <Typography sx={{ transform: "scale(1.5)", paddingLeft: "8%" }}>
                Municipal Corporation's Complaint Management System
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {/* <NavLink to={"/userlogin"}> */}
                <Tab label="Products" />
                {/* </NavLink> */}
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
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
      {value === 2 && <Contact />}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Header;
