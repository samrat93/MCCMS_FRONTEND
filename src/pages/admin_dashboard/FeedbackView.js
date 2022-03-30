import formclasses from "../../css/account_css/UserAccount.module.css";
import classes from "../../css/admin_css/AdminDashboard.module.css";
import msg from "../../css/msg/msg.module.css";
import tbl from "../../css/admin_css/table.module.css";
import { listFeedbackAction } from "../../redux/actions/userActions/FeedbackAction";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/layout/LoadingScreen";

const UserFeedBackView = () => {
  const dispatch = useDispatch();

  const ListFeedbackR = useSelector((state) => state.ListFeedbackR);
  const { loading, feedbacks } = ListFeedbackR;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listFeedbackAction());
    }
  }, [dispatch, userInfo]);

  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            {loading === true ? (
              <div className={classes.loadingDiv}>
                <Loading />
              </div>
            ) : (
              <table className={tbl.table}>
                <caption>User Feedbacks</caption>
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Persion Name</th>
                    <th>Email</th>
                    <th>Feedback Subject</th>
                    <th>Reg Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {feedbacks?.map((feed, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{feed.name}</td>
                      <td>{feed.email}</td>
                      <td>{feed.subject}</td>
                      <td>{feed.reg_date}</td>

                      <td>
                        <button className={tbl.tbl_button_edit}>
                          Acknowledge
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedBackView;
