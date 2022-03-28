import formclasses from "../../../css/public_css/publicForms.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import msg from "../../../css/msg/msg.module.css";
// import { Link, useNavigate } from "react-router-dom";
import { ListComplaintCategoryAction } from "../../../redux/actions/adminActions/ComplaintCategoryAction";
import { ListComplaintSubCategoryAction } from "../../../redux/actions/adminActions/ComplaintSubCategoryAction";
import { ListStateAction } from "../../../redux/actions/adminActions/StateActions";
import Validator from "../../../components/admin/complaintRemarksValidator";
import { addComplaintAction } from "../../../redux/actions/adminActions/ManageComplaintAction";
import { UpdateRemarksAction } from "../../../redux/actions/adminActions/ManageComplaintAction";

const ComplaintActionFormContent = ({ compData }) => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // console.log("complaint_id:", compData.id);
  const complaint_number = compData.id;
  const listStateRedu = useSelector((state) => state.listStateRedu);
  const { states } = listStateRedu;

  const listComplaintCategoryR = useSelector(
    (state) => state.listComplaintCategoryR
  );
  const { catList } = listComplaintCategoryR;

  const catdata = catList
    ?.filter((data) => {
      return data.id === compData.complaint_category;
    })
    .map((v) => v.category_name);

  const listComplaintSubCR = useSelector((state) => state.listComplaintSubCR);
  const { SubcatList } = listComplaintSubCR;

  const subcat = SubcatList?.filter((data) => {
    return data.id === compData.complaint_sub_category;
  }).map((v) => v.sub_category_name);

  const statedata = states
    ?.filter((data) => {
      return data.id === compData.state;
    })
    .map((v) => v.state_name);

  const AddComplaintRemarksR = useSelector(
    (state) => state.AddComplaintRemarksR
  );
  const { success } = AddComplaintRemarksR;

  const [values, setValues] = useState({
    complaint_status: "",
    remarks: "",
    complaint_number: "",
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
      dispatch(ListComplaintCategoryAction());
      dispatch(ListComplaintSubCategoryAction());
      dispatch(ListStateAction());
    }
    setValues({
      ...values,
      complaint_number: compData.id,
    });
  }, [dispatch, userInfo]);

  // console.log(values);
  // console.log("comp-status-for:", values.complaint_status);
  // console.log("comp-status-for:", values);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mess = Validator(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      const cid = compData.id;
      const comp_status = values.complaint_status;
      dispatch(addComplaintAction(values));
      dispatch(UpdateRemarksAction({ comp_status, cid: cid }));
      setValues({
        complaint_status: "",
        remarks: "",
        complaint_number: "",
      });
    }
  };

  return (
    compData && (
      <div>
        <div className={formclasses.title}>Complaint Details</div>
        <hr className={formclasses.hrTitle} />

        <div className={formclasses.content}>
          <form>
            <div className={formclasses["user-details"]}>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint Number :
                  <span className={formclasses.complaint_span}>
                    {compData.id}
                  </span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint By :
                  <span className={formclasses.complaint_span}>
                    {compData.user_id}
                  </span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint Subject :
                  <span className={formclasses.complaint_span}>
                    {compData.complaint_subject}
                  </span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint Reg-Date :
                  <span className={formclasses.complaint_span}>
                    {compData.complaint_date}
                  </span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint Details :
                  <span className={formclasses.complaint_span}>
                    {compData.complaint_details}
                  </span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint Category :
                  <span className={formclasses.complaint_span}>{catdata}</span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint Sub Category :
                  <span className={formclasses.complaint_span}>{subcat}</span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  File :
                  <a
                    href={compData.complaint_file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={formclasses.file_span}>View File</span>
                  </a>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Country :
                  <span className={formclasses.complaint_span}>India</span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  State :
                  <span className={formclasses.complaint_span}>
                    {statedata}
                  </span>
                </p>
              </div>
            </div>
          </form>
          {/* <div className={formclasses.ContentBody}> */}
          <div className={formclasses.container}>
            <form onSubmit={handleSubmit}>
              <div className={formclasses["user-details"]}>
                <div className={formclasses.title}>Take Approprate Action</div>
                <hr className={formclasses.hrTitle} />

                <div className={formclasses["input-box"]}>
                  <span className={formclasses.signinspan}>
                    Complaint Status
                  </span>
                  <select
                    name="complaint_status"
                    value={values.complaint_status}
                    className={formclasses.selectValue}
                    onChange={handleChange}
                  >
                    <option>Select Complaint Status</option>
                    <option value="2">Processing</option>
                    <option value="3">Closed</option>
                  </select>
                  {message.complaint_status && (
                    <p className={msg.error}>{message.complaint_status}</p>
                  )}
                </div>
                <div className={formclasses["input-textarea"]}>
                  <span className={formclasses.signinspan}>
                    Complaint Remarks
                  </span>
                  <textarea
                    className={formclasses.textarea}
                    name="remarks"
                    value={values.remarks}
                    onChange={handleChange}
                  />
                  <input
                    type="hidden"
                    name="complaint_number"
                    value={complaint_number}
                    onChange={handleChange}
                  />
                  {message.remarks && (
                    <p className={msg.error}>{message.remarks}</p>
                  )}
                  {success && (
                    <p className={msg.success}>
                      {"Complaint Details Updated Successfully "}
                    </p>
                  )}
                </div>
                <div className={formclasses.btndiv}>
                  <div className={formclasses.singleBtnDiv}>
                    <div className={formclasses.button}>
                      <input type="submit" value="Save Details" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    )
  );
};

export default ComplaintActionFormContent;
