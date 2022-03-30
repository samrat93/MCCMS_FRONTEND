import classes from "../../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../../css/account_css/UserAccount.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import msg from "../../../css/msg/msg.module.css";
import validate from "../../../components/admin/stateValidator";
import swal from "sweetalert";
import { UpdateStateAction } from "../../../redux/actions/adminActions/StateActions";

const UpdateStateContent = ({ stateData }) => {
  const UpdateStateR = useSelector((state) => state.UpdateStateR);
  const { cdata, error } = UpdateStateR;
  //   const listStateRedu = useSelector((state) => state.listStateRedu);
  //   const { states } = listStateRedu;

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    state_name: "",
    state_desc: "",
  });
  useEffect(() => {
    setValues({
      state_name: stateData.state_name,
      state_desc: stateData.state_desc,
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const SubmitFormHandler = (e) => {
    e.preventDefault();
    const mess = validate(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      const sid = stateData.id;
      dispatch(UpdateStateAction({ values, sid: sid }));
      swal("State Updated Successfully");
    }
  };
  return (
    <div>
      <div className={classes.Admin_panel_content_Body}>
        <div className={formclasses.container}>
          <div className={formclasses.title}>Update State</div>
          <div className={formclasses.content}>
            <form onSubmit={SubmitFormHandler}>
              <div className={formclasses["user-details"]}>
                {/* {loading && <p>Loading...</p>} */}
                <div className={formclasses["input-box-login"]}>
                  <span className={formclasses.signinspan}>State Name</span>
                  <input
                    type="text"
                    name="state_name"
                    value={values.state_name}
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
                  value={values.state_desc}
                  onChange={handleChange}
                />
                {error && <p className={msg.error}>{error}</p>}
              </div>

              <div className={formclasses.button}>
                <input type="submit" value="Update State" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStateContent;
