import formclasses from "../../css/account_css/UserAccount.module.css";
const PendingComplaints = () => {
  return (
    <div>
      <div className={formclasses.container}>
        <div className={formclasses["user-details"]}>
          <div className={formclasses.title}>Complaint Summery</div>
          <hr className={formclasses.hrTitle} />
          <div className={formclasses.complaintSummeryDiv}>
            <div className={formclasses["input-box"]}>
              <p className={formclasses.complaint_para}>
                Remarks :
                <span className={formclasses.complaint_span}>dfsf</span>
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
    </div>
  );
};
export default PendingComplaints;
