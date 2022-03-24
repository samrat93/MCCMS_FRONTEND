import classes from "../../../css/public_css/publicForms.module.css";
import classesDashboard from "../../../css/public_css/publicDashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import ValidateProfileForm from "../../../components/accounts/user/validateProfile";
import { ListStateAction } from "../../../redux/actions/adminActions/StateActions";
import { ListCountryAction } from "../../../redux/actions/adminActions/CountryActions";
import { registerProfileAction } from "../../../redux/actions/userActions/userProfileAction";
import msg from "../../../css/msg/msg.module.css";

const PublicProfile = () => {
  const dispatch = useDispatch();
  const listStateRedu = useSelector((state) => state.listStateRedu);
  const { states } = listStateRedu;

  const profileAddRedu = useSelector((state) => state.profileAddRedu);
  const { userProfile } = profileAddRedu;

  const listCountry = useSelector((state) => state.listCountry);
  const { countries } = listCountry;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [values, setValues] = useState({
    contact_no: "",
    pincode: "",
    gender: "",
    country: "",
    state: "",
    user_image: null,
    address: "",
    user: "",
  });
  const onChangePicture = (e) => {
    setValues({
      ...values,
      user_image: e.target.files[0],
    });
  };
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
      dispatch(ListStateAction());
      dispatch(ListCountryAction());
    }
    setValues({
      ...values,
      user: userInfo.user_Info.id,
    });
  }, [dispatch, userInfo]);
  // console.log("user_id", values.user_id);
  const submitHandler = (e) => {
    e.preventDefault();
    const mess = ValidateProfileForm(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      let form_data = new FormData();
      form_data.append("contact_no", values.contact_no);
      form_data.append("pincode", values.pincode);
      form_data.append("state", values.state);
      form_data.append("country", values.country);
      form_data.append("user_image", values.user_image, values.user_image.name);
      form_data.append("gender", values.gender);
      form_data.append("address", values.address);
      form_data.append("user", values.user);
      // console.log(values);
      dispatch(registerProfileAction(form_data));
      setValues({
        contact_no: "",
        address: "",
        pincode: "",
        state: "",
        user_image: null,
        country: "",
        gender: "",
      });
    }
  };
  return (
    <div>
      <div className={classesDashboard["home-content"]}>
        <div className={classesDashboard["sales-boxes"]}>
          <div className={classesDashboard["recent-sales"]}>
            <div className={classes.ContentBody}>
              <div className={classes.container}>
                <div className={classes.title}>Register Your Profile</div>
                <div className={classes.content}>
                  <form onSubmit={submitHandler}>
                    <div className={classes["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>
                          Your Username
                        </span>
                        <input
                          type="text"
                          name="username"
                          value={userInfo.user_Info.username}
                          // onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Your Email</span>
                        <input
                          type="text"
                          name="email"
                          value={userInfo.user_Info.email}
                          // onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>First Name</span>
                        <input
                          type="text"
                          name="first_name"
                          value={userInfo.user_Info.first_name}
                          // onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Last Name</span>
                        <input
                          type="text"
                          name="last_name"
                          value={userInfo.user_Info.last_name}
                          // onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Contact No</span>
                        <input
                          type="text"
                          name="contact_no"
                          value={values.contact_no || ""}
                          onChange={handleChange}
                          placeholder="Enter your contact number"
                        />
                        {message.contact_no && (
                          <p className={msg.error}>{message.contact_no}</p>
                        )}
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Pincode</span>
                        <input
                          type="text"
                          name="pincode"
                          value={values.pincode || ""}
                          onChange={handleChange}
                          placeholder="Enter your pincode"
                        />
                        {message.pincode && (
                          <p className={msg.error}>{message.pincode}</p>
                        )}
                      </div>
                    </div>
                    <div className={classes["user-details"]}>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Gender</span>
                        <select
                          name="gender"
                          value={values.gender}
                          className={classes.selectValue}
                          onChange={handleChange}
                        >
                          <option>Select your gender</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                        </select>
                        {message.gender && (
                          <p className={msg.error}>{message.gender}</p>
                        )}
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Country</span>
                        <select
                          name="country"
                          className={classes.selectValue}
                          onChange={handleChange}
                        >
                          <option>Select Country</option>
                          {countries?.map((con) => (
                            <option key={con.id} value={con.id}>
                              {con.country_name}
                            </option>
                          ))}
                        </select>
                        {message.country && (
                          <p className={msg.error}>{message.country}</p>
                        )}
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>State</span>
                        <select
                          name="state"
                          className={classes.selectValue}
                          onChange={handleChange}
                        >
                          <option>Select State</option>
                          {states?.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.state_name}
                            </option>
                          ))}
                        </select>
                        {message.state && (
                          <p className={msg.error}>{message.state}</p>
                        )}
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>
                          Upload Your Image
                        </span>
                        <input
                          className={classes["file-upload"]}
                          type="file"
                          name="user_image"
                          accept="image/png, image/jpeg"
                          onChange={onChangePicture}
                        />
                        <input
                          type="hidden"
                          name="user"
                          value={values.user}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes["input-textarea"]}>
                        <span className={classes.signinspan}>
                          Address Details
                        </span>
                        <textarea
                          className={classes.textarea}
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                        />
                        {userProfile && (
                          <p className={msg.success}>
                            {"Profile Updated Successfully "}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={classes.btndiv}>
                      <div className={classes.singleBtnDiv}>
                        <div className={classes.button}>
                          <input type="submit" value="Save Details" />
                        </div>
                      </div>
                    </div>
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
export default PublicProfile;
