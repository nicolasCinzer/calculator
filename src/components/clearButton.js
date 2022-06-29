import React from "react";
import "../css/clearButton.css";

const ClearButton = (props) => (
  <div className="clearButton" onClick={props.clear}>
    {props.children}
  </div>
);

export default ClearButton;
