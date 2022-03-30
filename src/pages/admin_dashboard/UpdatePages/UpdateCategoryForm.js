import classes from "../../../css/admin_css/AdminDashboard.module.css";
import clspop from "../../../css/admin_css/popform.module.css";

const UpdateCategoryForm = (props) => {
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

export default UpdateCategoryForm;
