import formclasses from "../../../css/public_css/publicForms.module.css";
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import msg from "../../../css/msg/msg.module.css";
import tbl from "../../../css/admin_css/table.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ListComplaintCategoryAction } from "../../../redux/actions/adminActions/ComplaintCategoryAction";
import { ListComplaintSubCategoryAction } from "../../../redux/actions/adminActions/ComplaintSubCategoryAction";
import { ListStateAction } from "../../../redux/actions/adminActions/StateActions";
import { ListComplaintRemarksAction } from "../../../redux/actions/adminActions/ManageComplaintAction";

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

  const ListComplaintRemarksR = useSelector(
    (state) => state.ListComplaintRemarksR
  );
  const { lcr } = ListComplaintRemarksR;

  // console.log("complaint remarks:", lcr);

  const compRemarksList = lcr?.filter((data) => {
    return data.complaint_number === userData.id;
  });

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
      dispatch(ListComplaintRemarksAction());
    }
  }, [dispatch, userInfo]);

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
                  <a
                    href={userData.complaint_file}
                    target="_blank"
                    rel="noreferrer"
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
          <form>
            <div className={formclasses.title}>Complaint Summery</div>
            <hr className={formclasses.hrSummery} />
            {compRemarksList?.map((comp, index) => (
              <div className={formclasses.container} key={index}>
                <div className={formclasses["user-details"]}>
                  <div className={formclasses["input-box"]}>
                    <p className={formclasses.complaint_para}>
                      Remarks :
                      <span className={formclasses.complaint_span}>
                        {comp.remarks}
                      </span>
                    </p>
                  </div>
                  <div className={formclasses["input-box"]}>
                    <p className={formclasses.complaint_para}>
                      Remarks Date :
                      <span className={formclasses.complaint_span}>
                        {comp.remarks_date}
                      </span>
                    </p>
                  </div>
                </div>
                <div className={formclasses["input-box"]}>
                  <p className={formclasses.complaint_para}>
                    Status :
                    {/* <ComplaintStatusView status={comp.complaint_status} /> */}
                    {comp.complaint_status === "2" ? (
                      <span className={formclasses.complaint_spanPending}>
                        complaint in process
                      </span>
                    ) : (
                      <span className={formclasses.complaint_spanClose}>
                        complaint closed
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
    )
  );
};

export default ComplaintHistFormContent;
