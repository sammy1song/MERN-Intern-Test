import React from "react";
import "./Group7341.css";

function Group7341(props) {
  const { viewOnMap, className } = props;

  return (
    <div className={`group-7341 ${className || ""}`}>
      <img className="vuesaxlinearmap" src="/img/vuesax-linear-map.svg" alt="vuesax/linear/map" />
      <div className="view-on-map gilroy-semibold--normal-scarpa-flow-16px">{viewOnMap}</div>
    </div>
  );
}

export default Group7341;
