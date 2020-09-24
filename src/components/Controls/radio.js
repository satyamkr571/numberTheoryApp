import React from "react";

export default function Radio(props) {
  const { id, name, radioData, handleChange } = props;
  const onInputChange = (_event) => {
    const inputValue = _event.target.value;
    if (handleChange) {
      handleChange(inputValue, _event);
    }
  };
  return (
    <div>
      <div>
        {radioData.map((data) => (
          <>
            <input
              type="radio"
              id={id}
              name={name}
              value={data.value}
              checked={data.selected}
              onChange={onInputChange}
            />
            <label for={id}>{data.value}</label>
          </>
        ))}
      </div>
    </div>
  );
}