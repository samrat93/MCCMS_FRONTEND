import classes from "../../../css/public_css/publicForms.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef, Fragment } from "react";
import ValidateProfileForm from "../../../components/accounts/user/validateProfile";
import { ListStateAction } from "../../../redux/actions/adminActions/StateActions";
import { ListCountryAction } from "../../../redux/actions/adminActions/CountryActions";
import {
  registerProfileAction,
  listProfileAction,
} from "../../../redux/actions/userActions/userProfileAction";
import msg from "../../../css/msg/msg.module.css";

const UpdateProfileContent = () => {
  const dispatch = useDispatch();
  const listStateRedu = useSelector((state) => state.listStateRedu);
  const { states } = listStateRedu;

  const profileAddRedu = useSelector((state) => state.profileAddRedu);
  const { userProfile } = profileAddRedu;

  const listCountry = useSelector((state) => state.listCountry);
  const { countries } = listCountry;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const ListProfileR = useSelector((state) => state.ListProfileR);
  const { plist } = ListProfileR;

  // console.log(plist);
  const current_user = userInfo.user_Info.id;

  const myProfile = plist?.find((pobj) => {
    return pobj.user.id === current_user;
  });

  // console.log("Profile", myProfile);

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
      dispatch(listProfileAction());
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
    <>
      <div className={classes.title}>Update Profile</div>
      <hr className={classes.hrTitle} />
      <div className={classes.content}>
        <form>
          <div className={classes["user-details"]}>
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
              {message.gender && <p className={msg.error}>{message.gender}</p>}
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
              {message.state && <p className={msg.error}>{message.state}</p>}
            </div>
            <div className={classes["input-box"]}>
              <span className={classes.signinspan}>Upload Your Image</span>
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
              <span className={classes.signinspan}>Address Details</span>
              <textarea
                className={classes.textarea}
                name="address"
                value={values.address}
                onChange={handleChange}
              />
              {userProfile && (
                <p className={msg.success}>{"Profile Updated Successfully "}</p>
              )}
            </div>
          </div>
          <div className={classes.btndiv}>
            <div className={classes.singleBtnDiv}>
              <div className={classes.button}>
                <input type="submit" value="Update Profile" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default UpdateProfileContent;
