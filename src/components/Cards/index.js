import React from "react";
import "./styles.scss";
const Card = (props) => {
  const { header, body, footer, classNames, children } = props;
  return (
    <div className={`card-container${classNames ? classNames : ""}`}>
      <div className="card-header"> {header}</div>
      <div className="card-body">{body || children}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};

export default Card;
