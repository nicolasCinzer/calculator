import React from "react";
import "../css/button.css";

function Button(props) {
  const operator = (children) => {
    return isNaN(children) && children !== "." && children !== "=";
  };

  return (
    <div
      className={`buttonContainer ${
        operator(props.children) ? "operator" : "number"
      }`}
      onClick={() => props.clickHandler(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
