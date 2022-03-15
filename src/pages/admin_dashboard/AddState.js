import classes from "../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../css/account_css/UserAccount.module.css";
import tbl from "../../css/admin_css/table.module.css";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import msg from "../../css/msg/msg.module.css";
import validate from "../../components/admin/countryAndStateValidator";
import {
  AddStateAction,
  ListStateAction,
} from "../../redux/actions/adminActions";

const AddState = () => {
  const dispatch = useDispatch();

  const addStateRedu = useSelector((state) => state.addStateRedu);
  const { loading, error, stateInfo } = addStateRedu;

  const listStateRedu = useSelector((state) => state.listStateRedu);
  const { states } = listStateRedu;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [values, setValues] = useState({
    state_name: "",
    state_desc: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(ListStateAction());
    } else {
      setMessage("Something went wrong");
    }
  }, [dispatch, userInfo]);

  const SubmitFormHandler = (e) => {
    e.preventDefault();

    const mess = validate(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      dispatch(AddStateAction(values));
      setValues("");
    }
  };

  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>Add New State</div>
                <div className={formclasses.content}>
                  <form onSubmit={SubmitFormHandler}>
                    <div className={formclasses["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}
                      <div className={formclasses["input-box-login"]}>
                        <span className={formclasses.signinspan}>
                          State Name
                        </span>
                        <input
                          type="text"
                          name="state_name"
                          onChange={handleChange}
                        />
                        {message.state_name && (
                          <p className={msg.error}>{message.state_name}</p>
                        )}
                      </div>
                    </div>
                    <div className={formclasses["input-textarea"]}>
                      <span className={formclasses.signinspan}>
                        State Desctiption
                      </span>
                      <textarea
                        className={formclasses.textarea}
                        name="state_desc"
                        onChange={handleChange}
                      />
                    </div>
                    {stateInfo && <p className={msg.success}>{stateInfo}</p>}
                    {error && <p className={msg.error}>{error}</p>}
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
                {states?.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.state_name}</td>
                    <td>{s.state_desc}</td>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddState;
