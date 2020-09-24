import React from "react";
import "./tooltip.scss";
export default function Tooltip(props) {
  const { tooltipValue } = props;
  return <div className="tooltip">{tooltipValue}</div>;
}
