import { Link } from "react-router-dom";
import classes from "../css/homepage.module.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const HomePage = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xs">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <div className={classes.wrapper}>
          <div className={classes.center}>
            <h1>Welcome To MCCMS </h1>
            <h2>Municipal Corporation Complaint Management System</h2>
            <div className={classes.buttons}>
              <Link to="/usersignup">
                <button className={classes.btn2}>Register Now</button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
