import React from "react";

export default function TextBox(props) {
  const { value, fieldId: id, name, handleChange } = props;
  console.log(props);
  const onInputChange = (_event) => {
    const inputValue = _event.target.value;
    if (handleChange) {
      handleChange(inputValue, _event);
    }
  };
  return (
    <div className="textbox-container">
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}
