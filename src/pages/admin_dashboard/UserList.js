import classes from "../../css/admin_css/AdminDashboard.module.css";
import msg from "../../css/msg/msg.module.css";
import React, { Fragment, useState } from "react";
import { readalluser } from "../../redux/actions/adminActions/ManageUserAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import tbl from "../../css/admin_css/table.module.css";
import UserConfirmForm from "./UserConfForm";
import UserVerifyFormContent from "./PopFormContent";
import Loading from "../../components/layout/LoadingScreen";
import ReactPaginate from "react-paginate";

const UserList = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  let limit = 10;

  const newUser = users?.results;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [serialNo, setSerialNo] = useState(1);
  // let Page = 1;

  useEffect(() => {
    if (userInfo) {
      dispatch(readalluser({ Page: serialNo }));
    }
  }, [dispatch, userInfo]);

  useEffect(() => {
    if (users && users?.count) {
      setPageCount(Math.ceil(users?.count / limit));
    }
  }, [users]);

  const [isOpen, setIsOpen] = useState(false);
  const [currId, setCurrID] = useState(0);
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setCurrUser((prev) => {
        return newUser?.find((userObj) => {
          return userObj.id === currId;
        });
      });
    }
  }, [currId]);

  const togglePopup = (e) => {
    // console.log("user-id", e.target.value);
    setCurrID(+e.target.value);
    setIsOpen(!isOpen);
  };
  // const [serialNo, setSerialNo] = useState(1);
  const handlePageClick = async (data) => {
    let Page = data.selected + 1;
    dispatch(readalluser({ Page: Page }));
    setSerialNo(Page);
  };

  return (
    <>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.title}>Total Registered Users</div>
            <div className={tbl.tbl_scroll}>
              {loading ? (
                <div className={classes.loadingDiv}>
                  <Loading />
                </div>
              ) : (
                <table className={tbl.table}>
                  {/* <caption>Total Registered Users</caption> */}
                  <thead>
                    <tr>
                      <th>S.N</th>
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
                      {newUser?.map((user, index) => (
                        <tr key={index}>
                          <td>{(serialNo - 1) * 10 + index + 1}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>{user.created}</td>
                          <td>
                            {user.is_active ? (
                              <Fragment>
                                <button
                                  className={tbl.tbl_button_edit}
                                  value={user.id}
                                  onClick={togglePopup}
                                >
                                  User Verified
                                </button>
                              </Fragment>
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
              )}
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
              {isOpen && currUser && (
                <div>
                  <UserConfirmForm
                    content={
                      <UserVerifyFormContent
                        userData={currUser}
                        serialNo={serialNo}
                      />
                    }
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
