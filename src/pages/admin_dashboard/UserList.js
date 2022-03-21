import classes from "../../css/admin_css/AdminDashboard.module.css";
import msg from "../../css/msg/msg.module.css";
import React, { useState } from "react";
import { readalluser } from "../../redux/actions/adminActions/ManageUserAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tbl from "../../css/admin_css/table.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import UserConfirmForm from "./UserConfForm";
import UserVerifyFormContent from "./PopFormContent";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);

  const { loading, error, users } = userList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      dispatch(readalluser());
    }
  }, [dispatch, userInfo]);

  const [isOpen, setIsOpen] = useState(false);
  const [currId, setCurrID] = useState(0);
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setCurrUser((prev) => {
        return users.find((userObj) => {
          return userObj.id === currId;
        });
      });
    }
  }, [currId]);

  const togglePopup = (e) => {
    console.log("user-id", e.target.value);
    setCurrID(+e.target.value);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.title}>User Details</div>
            <div className={tbl.tbl_scroll}>
              <table className={tbl.table}>
                <caption>Total Registered Users</caption>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Registered Date</th>
                    <th>Active Status</th>
                  </tr>
                </thead>
                {error ? (
                  <tbody>
                    <tr>
                      <td colSpan={6} className={msg.error}>
                        Sorry 😢 Something Went Wrong !
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {users?.map((user) => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.created}</td>
                        <td>
                          {user.is_active ? (
                            <VerifiedIcon
                              sx={{
                                fontSize: "30px",
                                color: "#0087bd",
                              }}
                            />
                          ) : (
                            <button
                              value={user.id}
                              onClick={togglePopup}
                              className={tbl.tbl_button}
                            >
                              Verify Now
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
              {isOpen && currUser && (
                <div>
                  <UserConfirmForm
                    content={<UserVerifyFormContent userData={currUser} />}
                    handleClose={togglePopup}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
