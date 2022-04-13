import formclasses from "../../css/account_css/UserAccount.module.css";
import classes from "../../css/admin_css/AdminDashboard.module.css";
import msg from "../../css/msg/msg.module.css";
import tbl from "../../css/admin_css/table.module.css";
import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import DialogCountry from "../../components/admin/delete_popup/deleteCountry";
import {
  AddCountryAction,
  ListCountryAction,
} from "../../redux/actions/adminActions/CountryActions";
import CountryUpdateContent from "./UpdatePages/CountryUpdateContent";
import UpdateCountryForm from "./UpdatePages/UpdateCountryForm";
import Loading from "../../components/layout/LoadingScreen";
import UserInput from "../Auth/hooks/useInput";
import swal from "sweetalert";

const AddCountry = () => {
  const dispatch = useDispatch();
  const addCountry = useSelector((state) => state.addCountry);
  const { error, countryInfo } = addCountry;

  const listCountry = useSelector((state) => state.listCountry);
  const { loading, countries } = listCountry;

  const UpdateCountryR = useSelector((state) => state.UpdateCountryR);
  const { cdata } = UpdateCountryR;

  const deleteCountryRedu = useSelector((state) => state.deleteCountryRedu);
  const { success } = deleteCountryRedu;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  //--------------> Delete Popup code Start <----------------------
  const [country, setCountry] = useState(countryInfo);

  const [dialog, setDialog] = useState({
    dialogMessage: "",
    isLoading: false,
    //update
    nameCountry: "",
    cid: "",
  });
  const idCountryRef = useRef();
  const handleDialog = (dialogMessage, isLoading, nameCountry, cid) => {
    setDialog({
      dialogMessage,
      isLoading,
      //update
      nameCountry,
      cid,
    });
  };
  const handleDelete = (id) => {
    var f;
    const index = countries.find(function (item, index) {
      f = index;
      return item.id === id;
    });
    handleDialog(
      "Are you sure want to delete?",
      true,
      countries[f].country_name,
      countries[f].id
    );
    idCountryRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setCountry(country.filter((p) => p.id !== idCountryRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  //--------------> Delete Popup code End <----------------------

  const [isOpen, setIsOpen] = useState(false);
  const [cid, setCid] = useState(0);
  const [cData, setCData] = useState(null);

  const {
    value: country_name,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryHandler,
    inputBlurHandler: countryBlur,
    reset: resetCountry_name,
  } = UserInput((value) => value !== "");
  const {
    value: country_desc,
    valueChangeHandler: countryDescHandler,
    reset: resetCountry_desc,
  } = UserInput((value) => value !== "");

  let formIsValid = false;
  if (countryIsValid) {
    formIsValid = true;
  }
  const values = { country_name, country_desc };

  useEffect(() => {
    if (userInfo) {
      dispatch(ListCountryAction());
    }
  }, [dispatch, userInfo, countryInfo, cdata, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    } else {
      dispatch(AddCountryAction(values));
    }
    resetCountry_name();
    resetCountry_desc();
  };

  const countryInputClasses = countryHasError
    ? formclasses["invalid"]
    : formclasses["input-box-login"];

  useEffect(() => {
    if (isOpen) {
      setCData((prev) => {
        return countries.find((cobj) => {
          return cobj.id === cid;
        });
      });
    } else {
      setCData(null);
    }
  }, [cid]);

  const togglePopup = (e) => {
    setCid(+e.target.value);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (countryInfo) {
      swal("Country Added Successfully.", {
        buttons: false,
        timer: 1500,
        icon: "success",
      });
    }
    if (error) {
      swal({
        buttons: false,
        timer: 2000,
        title: error.country_exist,
        icon: "error",
      });
    }
  }, [countryInfo, error]);

  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            {dialog.isLoading && (
              <DialogCountry
                nameCountry={dialog.nameCountry}
                onDialog={areUSureDelete}
                dialogMessage={dialog.dialogMessage}
                cid={dialog.cid}
              />
            )}
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>Add New Country</div>
                <div className={formclasses.content}>
                  <form onSubmit={submitHandler}>
                    <div className={formclasses["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}
                      <div className={countryInputClasses}>
                        <span className={formclasses.signinspan}>
                          Country Name
                        </span>
                        <input
                          type="text"
                          name="country_name"
                          value={country_name}
                          onChange={countryHandler}
                          onBlur={countryBlur}
                        />
                        {countryHasError && (
                          <p className={msg.error}>
                            {"Country Field Is Required."}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={formclasses["input-textarea"]}>
                      <span className={formclasses.signinspan}>
                        Country Desctiption
                      </span>
                      <textarea
                        className={formclasses.textarea}
                        name="country_desc"
                        value={country_desc}
                        onChange={countryDescHandler}
                      />
                    </div>

                    <div className={formclasses.button}>
                      <input
                        type="submit"
                        disabled={!formIsValid}
                        value="Add Country"
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
                {/* <caption>Country Details</caption> */}
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Country Name</th>
                    <th>Country Desctiption</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {countries?.map((country, index) => (
                    <tr key={country.id}>
                      <td>{index + 1}</td>
                      <td>{country.country_name}</td>
                      <td>{country.country_desc}</td>
                      <td>
                        <button
                          className={tbl.tbl_button_edit}
                          value={country.id}
                          onClick={togglePopup}
                        >
                          update
                        </button>

                        <button
                          // value={country.id}
                          className={tbl.tbl_button}
                          onClick={() => handleDelete(country.id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {isOpen && cData && (
              <div>
                <UpdateCountryForm
                  content={<CountryUpdateContent countryData={cData} />}
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

export default AddCountry;
