import formclasses from "../../css/account_css/UserAccount.module.css";
import classes from "../../css/admin_css/AdminDashboard.module.css";
import msg from "../../css/msg/msg.module.css";
import tbl from "../../css/admin_css/table.module.css";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCountryAction,
  ListCountryAction,
} from "../../redux/actions/adminActions";
import countryAndStateValidator from "../../components/admin/countryAndStateValidator";

const AddCountry = () => {
  const dispatch = useDispatch();
  const addCountry = useSelector((state) => state.addCountry);
  const { loading, error, countryInfo } = addCountry;

  const listCountry = useSelector((state) => state.listCountry);
  const { countries } = listCountry;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

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
    } else {
      setMessage("No Record Found");
    }
  }, [dispatch, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    const mess = countryAndStateValidator(values);
    console.log(Object.keys(mess).length);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      console.log("values", values);
      dispatch(AddCountryAction(values));
      // setValues("");
    }
  };
  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
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
                      </div>

                      {/* {message.is_active && (
                  <p className={msg.error}>{message.is_active}</p>
                )}*/}
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
                      <p className={msg.success}>{countryInfo}</p>
                    )}
                    {error && <p className={msg.error}>{error}</p>}
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
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {countries?.map((country) => (
                  <tr key={country.id}>
                    <td>{country.id}</td>
                    <td>{country.country_name}</td>
                    <td>{country.country_desc}</td>
                    <td>
                      <button className={tbl.tbl_button}>
                        <EditRoadIcon
                          sx={{
                            fontSize: "30px",
                            color: "#b705f7",
                          }}
                        />
                      </button>
                    </td>
                    <td>
                      <button className={tbl.tbl_button}>
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
