import React from "react";
import "./Group7322.css";

function Group7322(props) {
  const { myNotes, className } = props;

  return (
    <div className={`group-7322 ${className || ""}`}>
      <img
        className="vuesaxlinearnote-favorite"
        src="/img/vuesax-linear-note-favorite.svg"
        alt="vuesax/linear/note-favorite"
      />
      <div className="my-notes gilroy-semibold--normal-scarpa-flow-16px">{myNotes}</div>
    </div>
  );
}

export default Group7322;
