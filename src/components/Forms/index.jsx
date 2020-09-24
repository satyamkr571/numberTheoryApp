import React, { useState } from "react";
import DropDown from "../Controls/dropDown";
import Label from "../Controls/label";
import Radio from "../Controls/radio";
import TextBox from "../Controls/textBox";
import { formFields } from "./FormData";

export default function Index() {
  const [textvalue, settextvalue] = useState("satyam");
  const getFormInitialState = () => {
    let formFieldInitialState = {};
    formFields.forEach((field) => {
      formFieldInitialState[field.fieldId] = field.defaultValue || null;
    });
    return formFieldInitialState;
  };
  const initialState = getFormInitialState();
  console.log("initialState : ", initialState);
  const [formState, setFormState] = useState(initialState);

  const handleChange = (inputValue, _event) => {
    console.log(inputValue, _event);
    settextvalue(inputValue);
    const formData = { ...formState };
    formData[_event.target.id] = inputValue;
    setFormState(formData);
  };

  const renderField = (fieldData) => {
    switch (fieldData.fieldType) {
      case "text":
        return (
          <TextBox
            value={textvalue}
            handleChange={handleChange}
            {...fieldData}
          />
        );
      case "dropdown":
        return (
          <DropDown
            value={textvalue}
            handleChange={handleChange}
            {...fieldData}
          />
        );
      case "radio":
        return (
          <Radio
            id="rd1"
            name="radio"
            radioData={[{ value: 11 }, { value: 15 }, { value: 20 }]}
            handleChange={handleChange}
            {...fieldData}
          />
        );
      case "checkbox":
        return (
          <Radio
            id="rd1"
            name="radio"
            radioData={[{ value: 12 }, { value: 13 }, { value: 14 }]}
            handleChange={handleChange}
            {...fieldData}
          />
        );

      default:
        return <TextBox value={textvalue} handleChange={handleChange} />;
    }
  };
  return (
    <form className="dynamic-form">
      {formFields &&
        formFields.map((formField) => {
          return (
            <>
              <Label {...formField} />
              {renderField(formField)}
            </>
          );
        })}
    </form>
  );
}
