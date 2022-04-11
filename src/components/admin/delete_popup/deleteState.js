import classes from "../../../css/layout_css/DialogDelete.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteStateAction,
  ListStateAction,
} from "../../../redux/actions/adminActions/StateActions";
import { useEffect } from "react";
import swal from "sweetalert";

const DeleteStateDialog = ({ dialogMessage, onDialog, nameState, sid }) => {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(DeleteStateAction(sid));
    swal("State Deleted Successfully.", {
      buttons: false,
      timer: 1500,
      icon: "success",
    });
    onDialog(false);
  };

  const deleteStateRedu = useSelector((state) => state.deleteStateRedu);
  const { success } = deleteStateRedu;

  useEffect(() => {
    if (success) {
      dispatch(ListStateAction());
    }
  }, [dispatch, success]);

  return (
    <div className={classes.popup_box}>
      <div className={classes.deleteBody}>
        <div onClick={(e) => e.stopPropagation()}>
          <h3 className={classes.title}>{dialogMessage}</h3>
          <h2 className={classes.country_name}>{nameState}</h2>
          <button
            className={classes.deleteButton_no}
            onClick={() => onDialog(false)}
          >
            No
          </button>
          <button
            className={classes.deleteButton_yes}
            // onClick={() => onDialog(true)}
            onClick={deleteHandler}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteStateDialog;
