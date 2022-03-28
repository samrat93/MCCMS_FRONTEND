import classes from "../../../css/layout_css/DialogDelete.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  DeleteComplaintCategoryAction,
  ListComplaintCategoryAction,
} from "../../../redux/actions/adminActions/ComplaintCategoryAction";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeleteCategoryDialog = ({ dialogMessage, onDialog, cname, cid }) => {
  const dispatch = useDispatch();
  const deleteComplaintCatR = useSelector((state) => state.deleteComplaintCatR);
  const { loading, success } = deleteComplaintCatR;
  // const navigate = useNavigate();
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(DeleteComplaintCategoryAction(cid));
    onDialog(false);
  };
  useEffect(() => {
    if (success) {
      dispatch(ListComplaintCategoryAction());
    }
  }, [dispatch, success]);

  return (
    <div className={classes.popup_box}>
      <div className={classes.deleteBody}>
        <div onClick={(e) => e.stopPropagation()}>
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
        </div>
      </div>
    </div>
  );
};

export default DeleteCategoryDialog;
