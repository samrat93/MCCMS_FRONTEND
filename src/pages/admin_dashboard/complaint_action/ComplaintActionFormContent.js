import formclasses from "../../../css/public_css/publicForms.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import msg from "../../../css/msg/msg.module.css";
import { ListComplaintCategoryAction } from "../../../redux/actions/adminActions/ComplaintCategoryAction";
import { ListComplaintSubCategoryAction } from "../../../redux/actions/adminActions/ComplaintSubCategoryAction";
import { ListStateAction } from "../../../redux/actions/adminActions/StateActions";
import { addComplaintAction } from "../../../redux/actions/adminActions/ManageComplaintAction";
import { UpdateRemarksAction } from "../../../redux/actions/adminActions/ManageComplaintAction";
import UserInput from "../../Auth/hooks/useInput";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ComplaintActionFormContent = ({ compData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

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

  const {
    value: complaint_status,
    isValid: complaint_statusIsValid,
    hasError: complaint_statusHasError,
    valueChangeHandler: complaint_statusChangeHandler,
    inputBlurHandler: complaint_statusBlurHandler,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: remarks,
    isValid: remarksIsValid,
    hasError: remarksHasError,
    valueChangeHandler: remarksChangeHandler,
    inputBlurHandler: remarksBlurHandler,
  } = UserInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (complaint_statusIsValid && remarksIsValid) {
    formIsValid = true;
  }
  const values = { remarks, complaint_status, complaint_number };

  useEffect(() => {
    if (userInfo) {
      dispatch(ListComplaintCategoryAction());
      dispatch(ListComplaintSubCategoryAction());
      dispatch(ListStateAction());
    } else {
      navigate("/userlogin");
    }
  }, [dispatch, userInfo, navigate]);

  const InputClasses = complaint_statusHasError
    ? formclasses["invalid"]
    : formclasses["input-box-login"];

  const TextAreaClass = remarksHasError
    ? formclasses.invalid_text
    : formclasses.textarea;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      const cid = compData.id;
      const comp_status = complaint_status;
      dispatch(addComplaintAction(values));
      dispatch(UpdateRemarksAction({ comp_status, cid: cid }));
      swal("Complaint Status Updated Successfully.", {
        buttons: false,
        timer: 1500,
        icon: "success",
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

                <div className={InputClasses}>
                  <span className={formclasses.signinspan}>
                    Complaint Status
                  </span>
                  <select
                    name="complaint_status"
                    value={complaint_status}
                    className={formclasses.selectValue}
                    onChange={complaint_statusChangeHandler}
                    onBlur={complaint_statusBlurHandler}
                  >
                    <option>Select Complaint Status</option>
                    <option value="2">Processing</option>
                    <option value="3">Closed</option>
                  </select>
                  {complaint_statusHasError && (
                    <p className={msg.error}>
                      {"Complaint Status Field Is Required."}
                    </p>
                  )}
                </div>
                <div className={formclasses["input-textarea"]}>
                  <span className={formclasses.signinspan}>
                    Complaint Remarks
                  </span>
                  <textarea
                    className={TextAreaClass}
                    name="remarks"
                    value={remarks}
                    onChange={remarksChangeHandler}
                    onBlur={remarksBlurHandler}
                  />
                  {/* <input
                    type="hidden"
                    name="complaint_number"
                    value={complaint_number}
                    onChange={handleChange}
                  /> */}
                  {remarksHasError && (
                    <p className={msg.error}>{"Remarks Field Is Required"}</p>
                  )}
                </div>
                <div className={formclasses.btndiv}>
                  <div className={formclasses.singleBtnDiv}>
                    <div className={formclasses.button}>
                      <input
                        type="submit"
                        // disabled={!formIsValid}
                        value="Save Details"
                      />
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
