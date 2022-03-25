import formclasses from "../../../css/public_css/publicForms.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import msg from "../../../css/msg/msg.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ListComplaintCategoryAction } from "../../../redux/actions/adminActions/ComplaintCategoryAction";
import { ListComplaintSubCategoryAction } from "../../../redux/actions/adminActions/ComplaintSubCategoryAction";
import { ListStateAction } from "../../../redux/actions/adminActions/StateActions";
const ComplaintHistFormContent = ({ userData }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const listStateRedu = useSelector((state) => state.listStateRedu);
  const { states } = listStateRedu;

  const listComplaintCategoryR = useSelector(
    (state) => state.listComplaintCategoryR
  );
  const { catList } = listComplaintCategoryR;

  const catdata = catList
    ?.filter((data) => {
      return data.id === userData.complaint_category;
    })
    .map((v) => v.category_name);

  const listComplaintSubCR = useSelector((state) => state.listComplaintSubCR);
  const { SubcatList } = listComplaintSubCR;
  const subcat = SubcatList?.filter((data) => {
    return data.id === userData.complaint_sub_category;
  }).map((v) => v.sub_category_name);

  const statedata = states
    ?.filter((data) => {
      return data.id === userData.state;
    })
    .map((v) => v.state_name);

  useEffect(() => {
    if (userInfo) {
      dispatch(ListComplaintCategoryAction());
      dispatch(ListComplaintSubCategoryAction());
      dispatch(ListStateAction());
    }
  }, [dispatch, userInfo]);

  //   const UserVerifyFormHandler = (e) => {
  //     e.preventDefault();
  //     const id = userData.id;
  //     dispatch(UserAprroval({ is_active, id: id }));
  //   };

  return (
    userData && (
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
                    {userData.id}
                  </span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint Subject :
                  <span className={formclasses.complaint_span}>
                    {userData.complaint_subject}
                  </span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint Reg-Date :
                  <span className={formclasses.complaint_span}>
                    {userData.complaint_date}
                  </span>
                </p>
              </div>
              <div className={formclasses["input-box"]}>
                <p className={formclasses.complaint_para}>
                  Complaint Details :
                  <span className={formclasses.complaint_span}>
                    {userData.complaint_details}
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
                  <a href={userData.complaint_file} target="_blank">
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
            <div className={formclasses["user-details"]}>
              <div className={formclasses.title}>Complaint Summery</div>
              <hr className={formclasses.hrTitle} />
              <div className={formclasses.complaintSummeryDiv}>
                <div className={formclasses["input-box"]}>
                  <p className={formclasses.complaint_para}>
                    Remarks :
                    <span className={formclasses.complaint_span}>
                      {catdata}
                    </span>
                  </p>
                  <p className={formclasses.complaint_para}>
                    Status :
                    <span className={formclasses.complaint_span}>
                      {"Not Process Yet"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    )
  );
};

export default ComplaintHistFormContent;
