import React from "react";

export default function Label(props) {
  const { fieldId: labelFor, fieldLabel } = props;

  return (
    <div>
      <label for={labelFor} name={fieldLabel} id={labelFor}>
        {fieldLabel}
      </label>
    </div>
  );
}
