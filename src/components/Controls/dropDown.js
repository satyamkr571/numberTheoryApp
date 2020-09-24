import React from "react";

export default function DropDown(props) {
  const { value, id, name, dropdownvalue, handleChange } = props;
  const onInputChange = (_event) => {
    const inputValue = _event.target.value;
    if (handleChange) {
      handleChange(inputValue, _event);
    }
  };
  return (
    <div className="dropdown-container">
      <select name={name} value={value} id={id} onInputChange={onInputChange}>
        {dropdownvalue &&
          dropdownvalue.map((value) => <option value={value}>{value}</option>)}
      </select>
    </div>
  );
}
