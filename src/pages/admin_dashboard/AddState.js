import classes from "../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../css/account_css/UserAccount.module.css";
import tbl from "../../css/admin_css/table.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import msg from "../../css/msg/msg.module.css";
import UserInput from "../Auth/hooks/useInput";
import {
  AddStateAction,
  ListStateAction,
} from "../../redux/actions/adminActions/StateActions";
import DeleteStateDialog from "../../components/admin/delete_popup/deleteState";
import Loading from "../../components/layout/LoadingScreen";
import UpdateStateContent from "./UpdatePages/StateUpdateContent";
import UpdateStateForm from "./UpdatePages/UpdateStateForm";
import swal from "sweetalert";

const AddState = () => {
  const dispatch = useDispatch();

  const addStateRedu = useSelector((state) => state.addStateRedu);
  const { error, stateInfo } = addStateRedu;

  const listStateRedu = useSelector((state) => state.listStateRedu);
  const { loading, states } = listStateRedu;

  const UpdateStateR = useSelector((state) => state.UpdateStateR);
  const { statedata } = UpdateStateR;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const deleteStateRedu = useSelector((state) => state.deleteStateRedu);
  const { success } = deleteStateRedu;

  //--------------> Delete Popup code Start <----------------------
  const [state, setState] = useState(stateInfo);

  const [dialog, setDialog] = useState({
    dialogMessage: "",
    isLoading: false,
    //update
    nameState: "",
    sid: "",
  });
  const idStateRef = useRef();

  const handleDialog = (dialogMessage, isLoading, nameState, sid) => {
    setDialog({
      dialogMessage,
      isLoading,
      //update
      nameState,
      sid,
    });
  };
  const handleDelete = (id) => {
    var f;
    const index = states.find(function (item, index) {
      f = index;
      return item.id === id;
    });
    handleDialog(
      "Are you sure want to delete?",
      true,
      states[f].state_name,
      states[f].id
    );
    idStateRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setState(state.filter((p) => p.id !== idStateRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  //--------------> Delete Popup code End <----------------------

  const {
    value: state_name,
    isValid: stateIsValid,
    hasError: stateHasError,
    valueChangeHandler: stateHandler,
    inputBlurHandler: stateBlur,
    reset: resetState_name,
  } = UserInput((value) => value !== "");

  const {
    value: state_desc,
    valueChangeHandler: stateDescHandler,
    reset: resetState_desc,
  } = UserInput((value) => value !== "");

  let formIsValid = false;
  if (stateIsValid) {
    formIsValid = true;
  }
  const values = { state_name, state_desc };

  useEffect(() => {
    if (userInfo) {
      dispatch(ListStateAction());
    }
  }, [dispatch, userInfo, success, stateInfo, statedata]);

  const SubmitFormHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    } else {
      dispatch(AddStateAction(values));
      resetState_name();
      resetState_desc();
    }
  };
  const stateInputClasses = stateHasError
    ? formclasses["invalid"]
    : formclasses["input-box-login"];

  const [isOpen, setIsOpen] = useState(false);
  const [sid, setSid] = useState(0);
  const [stateData, setStateData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setStateData((prev) => {
        return states.find((sobj) => {
          return sobj.id === sid;
        });
      });
    } else {
      setStateData(null);
    }
  }, [sid]);

  const togglePopup = (e) => {
    setSid(+e.target.value);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            {dialog.isLoading && (
              <DeleteStateDialog
                nameState={dialog.nameState}
                onDialog={areUSureDelete}
                dialogMessage={dialog.dialogMessage}
                sid={dialog.sid}
              />
            )}
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>Add New State</div>
                <div className={formclasses.content}>
                  <form onSubmit={SubmitFormHandler}>
                    <div className={formclasses["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}
                      <div className={stateInputClasses}>
                        <span className={formclasses.signinspan}>
                          State Name
                        </span>
                        <input
                          type="text"
                          name="state_name"
                          value={state_name}
                          onChange={stateHandler}
                          onBlur={stateBlur}
                        />
                        {stateHasError && (
                          <p className={msg.error}>
                            {"State Field Is Required."}
                          </p>
                        )}
                        {error && error.state_exist && (
                          <p className={msg.error}>{error.state_exist}</p>
                        )}
                      </div>
                    </div>
                    <div className={formclasses["input-textarea"]}>
                      <span className={formclasses.signinspan}>
                        State Desctiption
                      </span>
                      <textarea
                        className={formclasses.textarea}
                        name="state_desc"
                        value={state_desc}
                        onChange={stateDescHandler}
                      />
                      {stateInfo && (
                        <p className={msg.success}>
                          {"State Added Successfully."}
                        </p>
                      )}
                    </div>

                    <div className={formclasses.button}>
                      <input
                        type="submit"
                        disabled={!formIsValid}
                        value="Add State"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {loading === true ? (
              <div className={classes.loadingDiv}>
                <Loading />
              </div>
            ) : (
              <table className={tbl.table}>
                {/* <caption>State Details</caption> */}
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>State Name</th>
                    <th>State Desctiption</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {states?.map((s, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{s.state_name}</td>
                      <td>{s.state_desc}</td>
                      <td>
                        <button
                          className={tbl.tbl_button_edit}
                          value={s.id}
                          onClick={togglePopup}
                        >
                          Update
                        </button>

                        <button
                          className={tbl.tbl_button}
                          onClick={() => handleDelete(s.id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {isOpen && stateData && (
              <div>
                <UpdateStateForm
                  content={<UpdateStateContent stateData={stateData} />}
                  handleClose={togglePopup}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddState;
