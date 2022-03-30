import { useEffect, useState } from "react";
import formclasses from "../../../css/account_css/UserAccount.module.css";
import classes from "../../../css/admin_css/AdminDashboard.module.css";
import msg from "../../../css/msg/msg.module.css";
import { useDispatch, useSelector } from "react-redux";
import ValidateCountry from "../../../components/admin/countryValidator";
import { UpdateCountryAction } from "../../../redux/actions/adminActions/CountryActions";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const CountryUpdateContent = ({ countryData }) => {
  // console.log(countryData);
  const navigate = useNavigate();

  const UpdateCountryR = useSelector((state) => state.UpdateCountryR);
  const { error } = UpdateCountryR;

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    country_name: "",
    country_desc: "",
  });

  useEffect(() => {
    setValues({
      country_name: countryData.country_name,
      country_desc: countryData.country_desc,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const mess = ValidateCountry(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      const cid = countryData.id;
      dispatch(UpdateCountryAction({ values, cid: cid }));
      swal("Country Updated Successfully", " ", "success");
      // navigate("/admin/add-country");
    }
  };

  return (
    <div>
      <div className={classes.Admin_panel_content_Body}>
        <div className={formclasses.container}>
          <div className={formclasses.title}>Update Country Data</div>
          <div className={formclasses.content}>
            <form onSubmit={submitHandler}>
              <div className={formclasses["user-details"]}>
                {/* {loading && <p>Loading...</p>} */}
                <div className={formclasses["input-box-login"]}>
                  <span className={formclasses.signinspan}>Country Name</span>
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
                {message.country_desc && (
                  <p className={msg.error}>{message.country_desc}</p>
                )}
              </div>

              <div className={formclasses.button}>
                <input type="submit" value="Update Country" />
              </div>
              {/* {cdata && (
                <p className={msg.success}>{"Country Updated Successfully"}</p>
              )} */}
              {error && <p className={msg.error}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryUpdateContent;
