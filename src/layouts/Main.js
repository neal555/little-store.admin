import React from "react";
import "./styles.css";

const Main = (props) => {
  return (
    <div className="main-layout">
      <div className="main-layout-header">{props.header}</div>
      <div className="main-layout-body">{props.body}</div>
      <div className="main-layout-footer">{props.footer}</div>
    </div>
  );
};

export default Main;
