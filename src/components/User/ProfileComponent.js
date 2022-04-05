import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "../../css/public_css/Profile.module.css";
import ProfileUpdateForm from "../../pages/public/public_dashboard/ProfileUpdateForm";
import UpdateProfileContent from "../../pages/public/public_dashboard/UpdateProfileContent";
import { listProfileAction } from "../../redux/actions/userActions/userProfileAction";
import { ListCountryAction } from "../../redux/actions/adminActions/CountryActions";
import { ListStateAction } from "../../redux/actions/adminActions/StateActions";
import noImage from "../../Static/images/noImage.jpg";

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = (e) => {
    setIsOpen(!isOpen);
  };
  const UpdateProfileR = useSelector((state) => state.UpdateProfileR);
  const { profileUp } = UpdateProfileR;

  const ListProfileR = useSelector((state) => state.ListProfileR);
  const { plist } = ListProfileR;
  const listCountry = useSelector((state) => state.listCountry);
  const { countries } = listCountry;

  const listStateRedu = useSelector((state) => state.listStateRedu);
  const { states } = listStateRedu;

  const current_user = userInfo.user_Info.id;
  const myProfile = plist?.find((pobj) => {
    return pobj.user === current_user;
  });

  const myState = states
    ?.filter((data) => {
      return data.id === myProfile?.state;
    })
    ?.map((v) => v.state_name);

  const myCountry = countries
    ?.filter((data) => {
      return data.id === myProfile?.country;
    })
    ?.map((v) => v.country_name);

  useEffect(() => {
    if (userInfo) {
      dispatch(listProfileAction());
      dispatch(ListCountryAction());
      dispatch(ListStateAction());
    }
  }, [userInfo, dispatch]);

  return (
    <Fragment>
      <div className={cls["card-container"]}>
        {myProfile ? (
          <img
            className={cls.round}
            src={myProfile?.user_image}
            alt="user_profile"
          />
        ) : (
          <img className={cls.round} src={noImage} alt="user_profile" />
        )}
        <h3>Email : {userInfo.user_Info.email}</h3>
        <h3>Firstname : {userInfo.user_Info.first_name}</h3>
        <h3>Lastname : {userInfo.user_Info.last_name}</h3>
        <p>Address : {myProfile?.address}</p>
        <div className={cls.skills}>
          <p className={cls.ptitle}>other details</p>
          <ul>
            <li>Contact No : {myProfile?.contact_no}</li>
            <li>Pincode : {myProfile?.pincode}</li>
            <li>Gender : {myProfile?.gender} </li>
            <li>Country : {myCountry}</li>
            <li>State : {myState}</li>
          </ul>
        </div>
        <div className={cls.buttons}>
          <button className={cls.primary} onClick={togglePopup}>
            Update Profile
          </button>
          {/* <button className={cls.ghost}>Following</button> */}
        </div>
      </div>
      {isOpen && (
        <Fragment>
          <ProfileUpdateForm
            content={<UpdateProfileContent />}
            handleClose={togglePopup}
          />
        </Fragment>
      )}
    </Fragment>
  );
};
export default ProfileComponent;
