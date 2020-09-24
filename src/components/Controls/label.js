import React from "react";
import Tooltip from "./tooltip";

export default function Label(props) {
  const { fieldId: labelFor, fieldLabel } = props;

  return (
    <div className="label-container">
      <label for={labelFor} name={fieldLabel} id={labelFor}>
        {fieldLabel}
      </label>
      <Tooltip tooltipValue={fieldLabel} />
    </div>
  );
}
