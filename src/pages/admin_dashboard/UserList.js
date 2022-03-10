import classes from "../../css/admin_css/AdminDashboard.module.css";

import React, { useState } from "react";
import { readalluser } from "../../redux/actions/userActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tbl from "../../css/admin_css/table.module.css";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  const { error, users } = userList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            <div className={classes.title}>User Details</div>

            <table>
              <caption>Statement Summary</caption>
              <thead>
                <tr>
                  <th scope="col">Account</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Period</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  <tr>
                    <td data-label="Account">Visa - 3412</td>
                    <td data-label="Due Date">04/01/2016</td>
                    <td data-label="Amount">$1,190</td>
                    <td data-label="Period">03/01/2016 - 03/31/2016</td>
                  </tr>;
                })}
              </tbody>
            </table>

            <div className={classes.button}>
              {/* <a href="#">See All</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
