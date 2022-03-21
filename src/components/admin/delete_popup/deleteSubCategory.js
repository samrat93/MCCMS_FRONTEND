import classes from "../../../css/layout_css/DialogDelete.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  DeleteComplaintSubCategoryAction,
  ListComplaintSubCategoryAction,
} from "../../../redux/actions/adminActions/ComplaintSubCategoryAction";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeleteSubCategoryDialog = ({ dialogMessage, onDialog, cname, cid }) => {
  const dispatch = useDispatch();
  const deleteComplaintSubCR = useSelector(
    (state) => state.deleteComplaintSubCR
  );
  const { loading, success } = deleteComplaintSubCR;
  // const navigate = useNavigate();
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(DeleteComplaintSubCategoryAction(cid));
    onDialog(false);
  };
  useEffect(() => {
    if (success) {
      dispatch(ListComplaintSubCategoryAction());
    }
  }, [dispatch, success]);

  return (
    <div onClick={() => onDialog(false)} className={classes.deleteBody}>
      <div onClick={(e) => e.stopPropagation()}>
        <div>
          <h3 className={classes.title}>{dialogMessage}</h3>
          <h2 className={classes.country_name}>{cname}</h2>
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
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default DeleteSubCategoryDialog;
