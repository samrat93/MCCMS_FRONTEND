import { Link } from "react-router-dom";
import classes from "../css/homepage.module.css";
const HomePage = () => {
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.center}>
          <h1>Welcome To HomePage</h1>
          <h2>Create Something New</h2>
          <div className={classes.buttons}>
            <button>Explore More</button>
            <Link to="/usersignup">
              <button className={classes.btn2}>Register Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
