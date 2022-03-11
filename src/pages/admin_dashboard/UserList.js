import classes from "../../css/admin_css/AdminDashboard.module.css";

import React from "react";
import { readalluser, UserAprroval } from "../../redux/actions/userActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tbl from "../../css/admin_css/table.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
// import { Approval } from "@mui/icons-material";
// import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

const UserList = () => {
  // const [userAList, setUserAList] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  // console.log("userlist", userList);
  const { loading, error, users } = userList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const approvalHandler = (e) => {
    const id = e.target.value;
    dispatch(UserAprroval({ id: id, is_active: true }));
    console.log(id);
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(readalluser());
    }
  }, [dispatch, userInfo]);

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
                          // <DoNotDisturbOnIcon
                          //   sx={{
                          //     fontSize: "30px",
                          //     color: "#cd5c5c",
                          //   }}
                          // />
                          <button
                            value={user.id}
                            onClick={approvalHandler}
                            className={tbl.tbl_button}
                          >
                            Verify Now
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
