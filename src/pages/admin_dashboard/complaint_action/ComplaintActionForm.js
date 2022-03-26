import classes from "../../../css/public_css/publicDashboard.module.css";
import clspop from "../../../css/public_css/popupForm.module.css";

const ComplaintActionForm = (props) => {
  return (
    <>
      <div className={clspop["popup-box"]}>
        <div className={clspop.box}>
          <span className={clspop["close-icon"]} onClick={props.handleClose}>
            X
          </span>
          {props.content}
        </div>
      </div>
    </>
  );
};

export default ComplaintActionForm;
