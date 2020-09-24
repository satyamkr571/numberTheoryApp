import React from "react";

export default function DropDown(props) {
  const {
    value,
    fieldId: id,
    name,
    dropdownvalue,
    handleChange,
    className,
  } = props;
  const onInputChange = (_event) => {
    const inputValue = _event.target.value;
    if (handleChange) {
      handleChange(inputValue, _event);
    }
  };
  return (
    <div className="dropdown-container">
      <select
        className={`input-field${className}`}
        name={name}
        value={value}
        id={id}
        onChange={onInputChange}
      >
        {dropdownvalue &&
          dropdownvalue.map((item) => (
            <option value={item.value}>{item.name}</option>
          ))}
      </select>
    </div>
  );
}
