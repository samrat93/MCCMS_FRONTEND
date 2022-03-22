import formclasses from "../../../css/account_css/UserAccount.module.css";
import classes from "../../../css/admin_css/AdminDashboard.module.css";
import msg from "../../../css/msg/msg.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditCountry = () => {
  const dispatch = useDispatch();
  const addCountry = useSelector((state) => state.addCountry);
  const { loading, error, countryInfo } = addCountry;
  console.log("all errors", error);
  const listCountry = useSelector((state) => state.listCountry);
  const { countries } = listCountry;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  //   const [values, setValues] = useState({
  //     country_name: "",
  //     country_desc: "",
  //   });

  //   const [message, setMessage] = useState("");

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setValues({
  //       ...values,
  //       [name]: value,
  //     });
  //   };

  //   useEffect(() => {
  //     if (userInfo) {
  //       dispatch(ListCountryAction());
  //     }
  //   }, [dispatch, userInfo]);

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     const mess = validator(values);
  //     if (Object.keys(mess).length !== 0) {
  //       setMessage(mess);
  //     } else {
  //       dispatch(AddCountryAction(values));
  //       setValues({
  //         country_name: "",
  //         country_desc: "",
  //       });
  //     }
  //   };

  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>Add New Country</div>
                <div className={formclasses.content}>
                  <form>
                    <div className={formclasses["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}
                      <div className={formclasses["input-box-login"]}>
                        <span className={formclasses.signinspan}>
                          Country Name
                        </span>
                        <input type="text" name="country_name" />
                        {/* {message.country_name && (
                          <p className={msg.error}>{message.country_name}</p>
                        )} */}
                        {/* {error && error.country_exist && (
                          <p className={msg.error}>
                            {"Country with this country name already exists."}
                          </p>
                        )} */}
                      </div>
                    </div>
                    <div className={formclasses["input-textarea"]}>
                      <span className={formclasses.signinspan}>
                        Country Desctiption
                      </span>
                      <textarea
                        className={formclasses.textarea}
                        name="country_desc"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCountry;
