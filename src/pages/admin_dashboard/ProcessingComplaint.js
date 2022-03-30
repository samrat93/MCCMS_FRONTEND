import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import formclasses from "../../css/account_css/UserAccount.module.css";
import tbl from "../../css/admin_css/table.module.css";
import classes from "../../css/admin_css/AdminDashboard.module.css";
import { listComplaintAction } from "../../redux/actions/userActions/complaintAction";
import { readalluser } from "../../redux/actions/adminActions/ManageUserAction";
import ComplaintActionForm from "./complaint_action/ComplaintActionForm";
import ComplaintActionFormContent from "./complaint_action/ComplaintActionFormContent";
import Loading from "../../components/layout/LoadingScreen";

const ProcessingComplaints = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const listComplaintRedu = useSelector((state) => state.listComplaintRedu);
  const { loading, compList } = listComplaintRedu;
  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  let newCompList = compList?.map((compObj) => {
    return {
      ...compObj,
      user_id: users?.find((userObj) => userObj.id === compObj.user_id)
        .username,
    };
  });

  const pendingComplaint = newCompList?.filter((data) => {
    return data.complaint_status === "2";
  });
  const [isOpen, setIsOpen] = useState(false);
  const [compId, setCompId] = useState(0);
  const [compData, setCompData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setCompData((prev) => {
        return newCompList.find((compObj) => {
          return compObj.id === compId;
        });
      });
    }
  }, [compId]);
  const togglePopup = (e) => {
    setCompId(+e.target.value);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(listComplaintAction());
      dispatch(readalluser());
    }
  }, [dispatch, userInfo]);
  return (
    <div>
      <div className={formclasses.title}> Complaint In Process</div>
      <hr className={formclasses.hrTitle} />
      <div className={tbl.tbl_scroll}>
        {loading === true ? (
          <div className={classes.loadingDiv}>
            <Loading />
          </div>
        ) : (
          <table className={tbl.table}>
            {/* <caption>Total Registered Users</caption> */}
            <thead>
              <tr>
                <th>Complaint Number</th>
                <th>Complaint By</th>
                <th>Complaint Subject</th>
                <th>Reg Date</th>
                <th>Complaint Status</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* <tbody>
            <tr>
              <td colSpan={6} className={msg.error}>
                Sorry 😢 Something Went Wrong !
              </td>
            </tr>
          </tbody> */}

            <tbody>
              {pendingComplaint?.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.user_id}</td>
                  <td>{p.complaint_subject}</td>
                  <td>{p.complaint_date}</td>
                  <td>
                    <button className={tbl.tbl_button_processing}>
                      Processing
                    </button>
                  </td>
                  <td>
                    <button
                      value={p.id}
                      onClick={togglePopup}
                      className={tbl.tbl_button}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {isOpen && compData && (
          <div>
            <ComplaintActionForm
              content={<ComplaintActionFormContent compData={compData} />}
              handleClose={togglePopup}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ProcessingComplaints;
