import classes from "../../../css/public_css/publicForms.module.css";
import classesDashboard from "../../../css/public_css/publicDashboard.module.css";
import validateComplaint from "../../../components/accounts/user/validateComplaint";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { registerComplaintAction } from "../../../redux/actions/userActions/complaintAction";
import { ListComplaintCategoryAction } from "../../../redux/actions/adminActions/ComplaintCategoryAction";
import { ListComplaintSubCategoryAction } from "../../../redux/actions/adminActions/ComplaintSubCategoryAction";
import { ListStateAction } from "../../../redux/actions/adminActions/StateActions";
import msg from "../../../css/msg/msg.module.css";

const LodgeComplaint = () => {
  const dispatch = useDispatch();

  const listComplaintSubCR = useSelector((state) => state.listComplaintSubCR);
  const { SubcatList } = listComplaintSubCR;

  const complaintReducer = useSelector((state) => state.complaintReducer);
  const { compList } = complaintReducer;
  // console.log("msg for success: ", compList);

  const listComplaintCategoryR = useSelector(
    (state) => state.listComplaintCategoryR
  );
  const { catList } = listComplaintCategoryR;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const c_id = userInfo.user_Info.id;
  // console.log("current_user", userInfo.user_Info.id);

  const listStateRedu = useSelector((state) => state.listStateRedu);
  const { states } = listStateRedu;

  const [values, setValues] = useState({
    complaint_category: "",
    complaint_sub_category: "",
    state: "",
    complaint_file: null,
    complaint_subject: "",
    complaint_details: "",
    user_id: "",
  });

  const onChangePicture = (e) => {
    setValues({
      ...values,
      complaint_file: e.target.files[0],
    });
  };

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
      dispatch(ListComplaintCategoryAction());
      dispatch(ListComplaintSubCategoryAction());
      dispatch(ListStateAction());
    }
    setValues({
      ...values,
      user_id: userInfo.user_Info.id,
    });
  }, [dispatch, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    const mess = validateComplaint(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      let form_data = new FormData();
      form_data.append("complaint_category", values.complaint_category);
      form_data.append("complaint_sub_category", values.complaint_sub_category);
      form_data.append("state", values.state);
      form_data.append(
        "complaint_file",
        values.complaint_file,
        values.complaint_file.name
      );
      form_data.append("complaint_subject", values.complaint_subject);
      form_data.append("complaint_details", values.complaint_details);
      form_data.append("user_id", values.user_id);
      // console.log(values);
      dispatch(registerComplaintAction(form_data));
      setValues({
        complaint_category: "",
        complaint_sub_category: "",
        state: "",
        complaint_file: null,
        complaint_subject: "",
        complaint_details: "",
      });
    }
  };
  return (
    <div>
      <div className={classesDashboard["home-content"]}>
        <div className={classesDashboard["sales-boxes"]}>
          <div className={classesDashboard["recent-sales"]}>
            <div className={classes.ContentBody}>
              <div className={classes.container}>
                <div className={classes.title}>Complaint Registration</div>
                <div className={classes.content}>
                  <form onSubmit={submitHandler}>
                    <div className={classes["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>
                          Select Complaint Category
                        </span>
                        <select
                          name="complaint_category"
                          onChange={handleChange}
                          className={classes.selectValue}
                        >
                          <option>Select a value</option>
                          {catList?.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.category_name}
                            </option>
                          ))}
                        </select>
                        {message.complaint_category_id && (
                          <p className={msg.error}>
                            {message.complaint_category_id}
                          </p>
                        )}
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>
                          Select Sub Complaint Category
                        </span>
                        <select
                          name="complaint_sub_category"
                          onChange={handleChange}
                          className={classes.selectValue}
                        >
                          <option>Select a value</option>
                          {SubcatList?.map((subcat) => (
                            <option key={subcat.id} value={subcat.id}>
                              {subcat.sub_category_name}
                            </option>
                          ))}
                        </select>
                        {message.complaint_sub_category_id && (
                          <p className={msg.error}>
                            {message.complaint_sub_category_id}
                          </p>
                        )}
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Select State</span>
                        <select
                          name="state"
                          onChange={handleChange}
                          className={classes.selectValue}
                        >
                          <option>Select your state</option>
                          {states?.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.state_name}
                            </option>
                          ))}
                        </select>
                        {message.state_id && (
                          <p className={msg.error}>{message.state_id}</p>
                        )}
                      </div>
                    </div>
                    <div className={classes["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}

                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>
                          Nature Of Complaint / Complaint Subject
                        </span>
                        <input
                          type="text"
                          name="complaint_subject"
                          value={values.complaint_subject}
                          onChange={handleChange}
                          placeholder="Enter your complaint subject"
                        />
                        <input
                          type="hidden"
                          name="user_id"
                          value={c_id}
                          onChange={handleChange}
                        />
                        {message.complaint_subject && (
                          <p className={msg.error}>
                            {message.complaint_subject}
                          </p>
                        )}
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>
                          Upload Your File
                        </span>
                        <input
                          className={classes["file-upload"]}
                          type="file"
                          name="complaint_file"
                          accept="image/png, image/jpeg"
                          onChange={onChangePicture}
                        />
                      </div>

                      <div className={classes["input-textarea"]}>
                        <span className={classes.signinspan}>
                          Complaint Details
                        </span>
                        <textarea
                          className={classes.textarea}
                          name="complaint_details"
                          value={values.complaint_details}
                          onChange={handleChange}
                        />
                        {message.complaint_details && (
                          <p className={msg.error}>
                            {message.complaint_details}
                          </p>
                        )}
                      </div>
                    </div>
                    {compList && (
                      <p className={msg.success}>
                        {"Your Complaint Registered Successfully."}
                      </p>
                    )}
                    <div className={classes.btndiv}>
                      <div className={classes.singleBtnDiv}>
                        <div className={classes.button}>
                          <input type="submit" value="Register Complaint" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LodgeComplaint;
