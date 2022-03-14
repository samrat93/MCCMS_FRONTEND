import classes from "../../css/admin_css/AdminDashboard.module.css";
import tbl from "../../css/admin_css/table.module.css";

const ComplaintList = () => {
  return (
    <>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.title}>Complaint Details</div>
            <div className={tbl.tbl_scroll}>
              <table className={tbl.table}>
                <caption>Total Complaint List</caption>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Registered Date</th>
                    <th>Active Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Complaint</td>
                    <td>Complaint</td>
                    <td>Complaint</td>
                    <td>Complaint</td>
                    <td>Complaint</td>
                    <td>Complaint</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintList;
