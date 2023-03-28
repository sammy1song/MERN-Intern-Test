import React from "react";
import "./Group7028.css";

function Group7028(props) {
  const { dashboard, className } = props;

  return (
    <div className={`group-702-1 ${className || ""}`}>
      <img
        className="vuesaxlinearspeedometer"
        src="/img/vuesax-linear-speedometer.svg"
        alt="vuesax/linear/speedometer"
      />
      <div className="dashboard gilroy-semibold--normal-scarpa-flow-16px">{dashboard}</div>
    </div>
  );
}

export default Group7028;
