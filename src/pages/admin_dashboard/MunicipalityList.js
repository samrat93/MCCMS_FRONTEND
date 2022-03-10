import classes from "../../css/admin_css/AdminDashboard.module.css";

const MunicipalityList = () => {
  return (
    <>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.title}>Municipality Details</div>
            {/* <div className={classes["sales-details"]}>
                <ul className={classes.details}>
                  <li className={classes.topic}>Date</li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2021</a>
                  </li>
                </ul>
              </div> */}
            <div className={classes.button}>
              {/* <a href="#">See All</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MunicipalityList;
