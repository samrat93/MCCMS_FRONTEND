import formclasses from "../../css/account_css/UserAccount.module.css";
import classes from "../../css/admin_css/AdminDashboard.module.css";
import msg from "../../css/msg/msg.module.css";
import tbl from "../../css/admin_css/table.module.css";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import DialogCountry from "../../components/admin/delete_popup/deleteCountry";
import {
  AddCountryAction,
  ListCountryAction,
} from "../../redux/actions/adminActions/CountryActions";
import validator from "../../components/admin/countryValidator";
import { useNavigate } from "react-router-dom";

const AddCountry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addCountry = useSelector((state) => state.addCountry);
  const { loading, error, countryInfo } = addCountry;
  console.log("all errors", error);
  const listCountry = useSelector((state) => state.listCountry);
  const { countries } = listCountry;
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

  const [values, setValues] = useState({
    country_name: "",
    country_desc: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(ListCountryAction());
    }
  }, [dispatch, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const mess = validator(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      dispatch(AddCountryAction(values));
      setValues({
        country_name: "",
        country_desc: "",
      });
    }
  };

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
                      <div className={formclasses["input-box-login"]}>
                        <span className={formclasses.signinspan}>
                          Country Name
                        </span>
                        <input
                          type="text"
                          name="country_name"
                          value={values.country_name}
                          onChange={handleChange}
                        />
                        {message.country_name && (
                          <p className={msg.error}>{message.country_name}</p>
                        )}
                        {error && error.country_exist && (
                          <p className={msg.error}>
                            {"Country with this country name already exists."}
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
                        value={values.country_desc}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={formclasses.button}>
                      <input type="submit" value="Add Country" />
                    </div>
                    {countryInfo && (
                      <p className={msg.success}>
                        {"Country Add Successfully"}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>

            <table className={tbl.table}>
              <caption>Country Details</caption>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Country Name</th>
                  <th>Country Desctiption</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {countries?.map((country) => (
                  <tr key={country.id}>
                    <td>{country.id}</td>
                    <td>{country.country_name}</td>
                    <td>{country.country_desc}</td>
                    <td>
                      <button
                        className={tbl.tbl_button}
                        onClick={() =>
                          navigate(`/admin/editCountry/${country.id}`)
                        }
                      >
                        <EditRoadIcon
                          sx={{
                            fontSize: "30px",
                            color: "#b705f7",
                          }}
                        />
                      </button>

                      <button
                        // value={country.id}
                        className={tbl.tbl_button}
                        onClick={() => handleDelete(country.id)}
                      >
                        <DeleteIcon
                          sx={{
                            fontSize: "30px",
                            color: "#b705f7",
                          }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCountry;
