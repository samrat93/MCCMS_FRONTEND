import classes from "../../../css/public_css/publicForms.module.css";
import dascss from "../../../css/public_css/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ListStateAction } from "../../../redux/actions/adminActions/StateActions";
import { ListCountryAction } from "../../../redux/actions/adminActions/CountryActions";
import {
  registerProfileAction,
  listProfileAction,
  updateProfileAction,
} from "../../../redux/actions/userActions/userProfileAction";
import msg from "../../../css/msg/msg.module.css";
import swal from "sweetalert";

const UpdateProfileContent = () => {
  const dispatch = useDispatch();
  const listStateRedu = useSelector((state) => state.listStateRedu);
  const { states } = listStateRedu;

  const UpdateProfileR = useSelector((state) => state.UpdateProfileR);
  const { profileUp } = UpdateProfileR;

  const listCountry = useSelector((state) => state.listCountry);
  const { countries } = listCountry;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const ListProfileR = useSelector((state) => state.ListProfileR);
  const { plist } = ListProfileR;

  const current_user = userInfo.user_Info.id;

  const myProfile = plist?.find((pobj) => {
    return pobj.user === current_user;
  });
  console.log(myProfile?.user_image.name);

  // console.log("Profile-id", myProfile?.id);
  const id = myProfile?.id;

  const [values, setValues] = useState({
    contact_no: myProfile?.contact_no,
    pincode: myProfile?.pincode,
    gender: myProfile?.gender,
    country: myProfile?.country,
    state: myProfile?.state,
    user_image: myProfile?.user_image,
    address: myProfile?.address,
    user: myProfile?.user,
  });

  const onChangePicture = (e) => {
    setValues({
      ...values,
      user_image: e.target.files[0],
    });
  };

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
  }, [dispatch, userInfo, profileUp]);
  // console.log("user_id", values.user_id);
  const submitHandler = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("contact_no", values.contact_no);
    form_data.append("pincode", values.pincode);
    form_data.append("state", values.state);
    form_data.append("country", values.country);
    !values.user_image && form_data.append("user_image", values.user_image);
    form_data.append("gender", values.gender);
    form_data.append("address", values.address);
    form_data.append("user", values.user);

    console.log(values.user_image);

    if (!myProfile) {
      dispatch(registerProfileAction(form_data));
      swal("Profile Added Successfully.", "success");
    } else {
      dispatch(updateProfileAction({ form_data, id: id }));
      swal("Profile Updated Successfully.", "success");
    }
  };
  return (
    <>
      <div className={classes.title}>Update Profile</div>
      <hr className={classes.hrTitle} />
      <div className={classes.content}>
        <form onSubmit={submitHandler}>
          <div className={classes["user-details"]}>
            <div className={classes["input-box"]}>
              <span className={classes.signinspan}>Contact No</span>
              <input
                type="text"
                name="contact_no"
                // value={values.contact_no || ""}
                defaultValue={myProfile?.contact_no}
                onChange={handleChange}
                placeholder="Enter your contact number"
              />
            </div>
            <div className={classes["input-box"]}>
              <span className={classes.signinspan}>Pincode</span>
              <input
                type="number"
                name="pincode"
                // value={values.pincode || ""}
                defaultValue={myProfile?.pincode}
                onChange={handleChange}
                placeholder="Enter your pincode"
              />
            </div>
            <div className={classes["input-box"]}>
              <span className={classes.signinspan}>Gender</span>
              <select
                name="gender"
                // value={values.gender}
                defaultValue={myProfile?.gender}
                className={classes.selectValue}
                onChange={handleChange}
              >
                <option>Select your gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div className={classes["input-box"]}>
              <span className={classes.signinspan}>Country</span>
              <select
                name="country"
                defaultValue={myProfile?.country}
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
            </div>
            <div className={classes["input-box"]}>
              <span className={classes.signinspan}>State</span>
              <select
                name="state"
                className={classes.selectValue}
                onChange={handleChange}
                defaultValue={myProfile?.state}
              >
                <option>Select State</option>
                {states?.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.state_name}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes["input-box"]}>
              <span className={classes.signinspan}>Upload Your Image</span>
              <input
                className={classes["file-upload"]}
                type="file"
                name="user_image"
                // value={values.user_image}
                accept="image/jpeg,image/png,image/gif"
                onChange={onChangePicture}
              />

              <img
                className={dascss.imgUpdate}
                src={myProfile?.user_image}
                alt="profile_image"
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
                // value={values.address}
                defaultValue={myProfile?.address}
                onChange={handleChange}
              />
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
