import React from "react";

export default function Checkbox(props) {
  const { id, name, radioData, handleChange, className } = props;
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
              className={`${className}`}
              type="checkbox"
              id={id}
              name={id}
              value={data.value}
              checked={data.selected}
              onChange={onInputChange}
            />
            <label for={id}>{data.name}</label>
          </>
        ))}
      </div>
    </div>
  );
}
