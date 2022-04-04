import classes from "../../../css/public_css/publicDashboard.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listComplaintAction } from "../../../redux/actions/userActions/complaintAction";

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

const GraphsAndChart = () => {
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const listComplaintRedu = useSelector((state) => state.listComplaintRedu);
  const { compList } = listComplaintRedu;

  const current_user = userInfo.user_Info.id;
  const newComplaintList = compList?.filter((data) => {
    return data.user_id === current_user;
  });
  const totalcomplaint = newComplaintList?.length;
  const pending = newComplaintList?.filter((data) => {
    return data.complaint_status === "1";
  }).length;

  const processing = newComplaintList?.filter((data) => {
    return data.complaint_status === "2";
  }).length;

  const complete = newComplaintList?.filter((data) => {
    return data.complaint_status === "3";
  }).length;

  useEffect(() => {
    if (userInfo) {
      dispatch(listComplaintAction());
    }
  }, [userInfo, dispatch]);

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
          <div className={classes.title}> Your Complaint Status Chart</div>
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

        {/* <div className={classes["top-sales"]}>something here</div> */}
      </div>
    </div>
  );
};

export default GraphsAndChart;
