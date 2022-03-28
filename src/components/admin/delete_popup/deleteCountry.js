import classes from "../../../css/layout_css/DialogDelete.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCountryAction,
  ListCountryAction,
} from "../../../redux/actions/adminActions/CountryActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DialogCountry = ({ dialogMessage, onDialog, nameCountry, cid }) => {
  const dispatch = useDispatch();
  const deleteCountryRedu = useSelector((state) => state.deleteCountryRedu);
  const { loading, success } = deleteCountryRedu;
  // const navigate = useNavigate();
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(DeleteCountryAction(cid));
    onDialog(false);
  };
  useEffect(() => {
    if (success) {
      dispatch(ListCountryAction());
    }
  }, [dispatch, success]);

  return (
    <div className={classes.popup_box}>
      <div className={classes.deleteBody}>
        <h3 className={classes.title}>{dialogMessage}</h3>
        <h2 className={classes.country_name}>{nameCountry}</h2>

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
  );
};

export default DialogCountry;
