import React from "react";
import ReactLoading from "react-loading";
import classes from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={classes.loadingdiv}>
      {/* <ReactLoading type="balls" color="#0000FF" 
          height={100} width={50} />
        <ReactLoading type="bars" color="#0000FF
          height={100} width={50} />
        <ReactLoading type="bubbles" color="#0000FF"
          height={100} width={50} />
        <ReactLoading type="cubes" color="#0000FF"
          height={100} width={50} />
        <ReactLoading type="cylon" color="#0000FF" 
          height={100} width={50} />
        <ReactLoading type="spin" color="#0000FF"
          height={100} width={50} /> */}
      <ReactLoading type="spokes" color="#FF0000" height={300} width={200} />
      {/* <ReactLoading
          type="spinningBubbles"
          color="#0000FF"
          height={100}
          width={50}
        /> */}
    </div>
  );
}
