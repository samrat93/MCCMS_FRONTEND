import classes from "../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../css/account_css/UserAccount.module.css";
import tbl from "../../css/admin_css/table.module.css";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import DeleteIcon from "@mui/icons-material/Delete";

const AddState = () => {
  return (
    <>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            {/* <div className={classes.title}>Add New Country</div> */}
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>Add New State</div>
                <div className={formclasses.content}>
                  <form>
                    <div className={formclasses["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}
                      <div className={formclasses["input-box-login"]}>
                        <span className={formclasses.signinspan}>
                          State Name
                        </span>
                        <input type="text" name="state_name" />
                      </div>
                    </div>
                    <div className={formclasses["input-textarea"]}>
                      <span className={formclasses.signinspan}>
                        State Desctiption
                      </span>
                      <textarea
                        className={formclasses.textarea}
                        name="state_desc"
                      />
                    </div>

                    <div className={formclasses.button}>
                      <input type="submit" value="Add State" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <table className={tbl.table}>
              <caption>State Details</caption>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>State Name</th>
                  <th>State Desctiption</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Gujarat</td>
                  <td>Gujarat is nice</td>
                  <td>
                    <button className={tbl.tbl_button}>
                      <EditRoadIcon
                        sx={{
                          fontSize: "30px",
                          color: "#b705f7",
                        }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className={tbl.tbl_button}>
                      <DeleteIcon
                        sx={{
                          fontSize: "30px",
                          color: "#b705f7",
                        }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddState;
