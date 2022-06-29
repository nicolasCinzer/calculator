import React from "react";
import "../css/clearButton.css";

const ClearButton = (props) => (
  <div className="clearButton">{props.children}</div>
);

export default ClearButton;
