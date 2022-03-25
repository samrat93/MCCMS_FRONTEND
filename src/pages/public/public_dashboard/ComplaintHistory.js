import classes from "../../../css/public_css/publicForms.module.css";
import classesDashboard from "../../../css/public_css/publicDashboard.module.css";
import msg from "../../../css/msg/msg.module.css";
import tbl from "../../../css/admin_css/table.module.css";
import { listComplaintAction } from "../../../redux/actions/userActions/complaintAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, Fragment } from "react";
import ComplaintHistForm from "./complaintHistForm";
import ComplaintHistFormContent from "./complaintHistoryView";

const ComplaintHistory = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const user = userInfo.user_Info.id;

  const listComplaintRedu = useSelector((state) => state.listComplaintRedu);
  const { compList } = listComplaintRedu;
  // console.log("complaint list :", compList);
  const complaintUser = compList?.filter((data) => {
    return data.user_id === user;
  });

  const [isOpen, setIsOpen] = useState(false);

  const [compId, setCompId] = useState(0);
  const [compData, setCompData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setCompData((prev) => {
        return compList.find((compObj) => {
          return compObj.id === compId;
        });
      });
    }
  }, [compId]);

  const togglePopup = (e) => {
    setCompId(+e.target.value);
    setIsOpen(!isOpen);
  };

  const ComplaintStatus = (props) => {
    if (props.status === "1") {
      return (
        <td>
          <button className={tbl.tbl_button_pending}>Not Process Yet</button>
        </td>
      );
    }
    if (props.status === "2") {
      return (
        <td>
          <button className={tbl.tbl_button_processing}>Processing</button>
        </td>
      );
    }
    if (props.status === "3") {
      return (
        <td>
          <button className={tbl.tbl_button_closed}>Closed</button>
        </td>
      );
    }
  };

  // console.log("filtered data", complaintUser);
  useEffect(() => {
    if (userInfo) {
      dispatch(listComplaintAction());
    }
  }, [dispatch, userInfo]);
  return (
    <div>
      <div className={classesDashboard["home-content"]}>
        <div className={classesDashboard["sales-boxes"]}>
          <div className={classesDashboard["recent-sales"]}>
            <div className={classes.ContentBody}>
              <div className={classes.container}>
                <div className={classes.title}>Your Complaint History</div>
                <div className={classes.content}>
                  <div className={tbl.tbl_scroll}>
                    <table className={tbl.table}>
                      <thead>
                        <tr>
                          <th>Complaint Number</th>
                          <th>Complaint Subject</th>
                          <th>Complaint Reg Date</th>
                          <th>Last Updation Date</th>
                          <th>Complaint Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* {countries?.map((country) => ( */}
                        {complaintUser?.map((comp, index) => (
                          <tr key={index}>
                            <td>{comp.id}</td>
                            <td>{comp.complaint_subject}</td>
                            <td>{comp.complaint_date}</td>
                            <td>{comp.updation_date}</td>
                            <Fragment>
                              <ComplaintStatus status={comp.complaint_status} />
                            </Fragment>
                            <td>
                              <button
                                className={tbl.tbl_button}
                                value={comp.id}
                                onClick={togglePopup}
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {isOpen && compData && (
                      <div>
                        <ComplaintHistForm
                          content={
                            <ComplaintHistFormContent userData={compData} />
                          }
                          handleClose={togglePopup}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComplaintHistory;
