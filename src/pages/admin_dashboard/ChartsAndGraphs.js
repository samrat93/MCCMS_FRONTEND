import formclasses from "../../css/account_css/UserAccount.module.css";
import classes from "../../css/admin_css/AdminDashboard.module.css";
import msg from "../../css/msg/msg.module.css";
import tbl from "../../css/admin_css/table.module.css";
import { listFeedbackAction } from "../../redux/actions/userActions/FeedbackAction";
import { listComplaintAction } from "../../redux/actions/userActions/complaintAction";
import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/layout/LoadingScreen";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const ChartAndGraph = () => {
  const listComplaintRedu = useSelector((state) => state.listComplaintRedu);
  const { compList } = listComplaintRedu;

  // console.log(compList);
  const pending = compList?.filter((data) => {
    return data.complaint_status === "1";
  })?.length;

  const processing = compList?.filter((data) => {
    return data.complaint_status === "2";
  })?.length;

  const complete = compList?.filter((data) => {
    return data.complaint_status === "3";
  })?.length;

  const totalcomplaint = compList?.length;
  // console.log(totalcomplaint, pending, processing, complete);

  const dispatch = useDispatch();

  //   const ListFeedbackR = useSelector((state) => state.ListFeedbackR);
  //   const { loading, feedbacks } = ListFeedbackR;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listFeedbackAction());
    }
  }, [dispatch, userInfo]);

  const data = [
    {
      name: "Complaints",
      TotalComplaint: totalcomplaint,
      Pending: pending,
      Processing: processing,
      Closed: complete,
    },
  ];

  return (
    <div>
      <div className={classes["sales-boxes"]}>
        <div className={classes["recent-sales"]}>
          <div className={classes.title}>Complaint Status Chart</div>
          {/* {loading === true ? (
              <div className={classes.loadingDiv}>
                <Loading />
              </div>
            ) : ( */}
          {/* something here
            )} */}

          {/* <h1 className="chart-heading">Area Chart</h1> */}
          <ResponsiveContainer width={"99%"} height={500}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="TotalComplaint" fill="#0088fe" />
              <Bar dataKey="Pending" fill="#CD5C5C" />
              <Bar dataKey="Processing" fill="#FF7F50" />
              <Bar dataKey="Closed" fill="#008000" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={classes["top-sales"]}>something here</div>
      </div>
    </div>
  );
};

export default ChartAndGraph;
