import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../Controls/checkBox";
import DropDown from "../Controls/dropDown";
import Label from "../Controls/label";
import Radio from "../Controls/radio";
import TextBox from "../Controls/textBox";
import { getFormData } from "./action";
// import { formFields } from "./formData";
import "./form.scss";
import Card from "../Cards";
import { isEmpty, isEqual, isNull } from "lodash";

export default function Index() {
  const selectFormData = useSelector((state) => state.formData);
  const { formFields } = selectFormData;
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({});

  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    getFormInitialState();
  }, [formFields]);
  const getFormInitialState = () => {
    let formFieldInitialState = {};
    formFields &&
      formFields.forEach((field) => {
        formFieldInitialState[field.fieldId] = field.defaultValue || "";
      });
    setFormState(formFieldInitialState);
    return formFieldInitialState;
  };
  console.log("formState : ", formState);
  const [textvalue, settextvalue] = useState("satyam");
  const [show, setshow] = useState(null);
  const handleChange = (inputValue, _event) => {
    console.log(inputValue, _event);
    const id = _event.target.id;
    if (isEqual(id, "dd")) {
      //const currentFormControl= [...for]
      //dispatch(upFormControlStatus(inputValue))

      setshow(inputValue);
    }
    settextvalue(inputValue);
    const formData = { ...formState };
    formData[_event.target.id] = inputValue;
    setFormState(formData);
  };
  const onSubmit = () => {
    alert("Form Submited");
  };
  const renderField = (fieldData) => {
    switch (fieldData.fieldType) {
      case "text":
        return (
          <TextBox
            className=" field"
            value={formState[fieldData.fieldId]}
            handleChange={handleChange}
            {...fieldData}
          />
        );
      case "dropdown":
        return (
          <DropDown
            className=" field"
            value={formState[fieldData.fieldId]}
            handleChange={handleChange}
            {...fieldData}
          />
        );
      case "radio":
        return (
          <Radio
            className=" field"
            id="radio"
            name="radio"
            radioData={fieldData.fieldValue}
            value={formState[fieldData.fieldId]}
            handleChange={handleChange}
            {...fieldData}
          />
        );
      case "checkbox":
        return (
          <Checkbox
            className=" field"
            id="checkbox"
            name="radio"
            radioData={fieldData.fieldValue}
            value={formState[fieldData.fieldId]}
            handleChange={handleChange}
            {...fieldData}
          />
        );

      default:
        return (
          <TextBox
            className=" field"
            value={textvalue}
            handleChange={handleChange}
          />
        );
    }
  };
  return (
    <div className="form-container">
      <Card header="Task 2 Form">
        <form className="dynamic-form" autoComplete="off">
          {formFields &&
            formFields.map((formField) => {
              return (
                <div className="form-field">
                  <Label {...formField} />
                  {renderField(formField)}
                </div>
              );
            })}

          {isNull(show) || isEmpty(show) ? null : isEqual(show, "true") ? (
            <div className="form-field">
              <Label fieldLabel={"Check your answer"} />
              <Checkbox
                className=" field"
                id="checkbox"
                name="radio"
                radioData={[
                  { name: "True", value: true },
                  { name: "False", value: false },
                ]}
                value={"checkbox"}
                handleChange={handleChange}
              />
            </div>
          ) : (
            <div className="form-field">
              <Label fieldLabel={"Check your answer"} />
              <Radio
                className=" field"
                id="radio"
                name="radio"
                radioData={[
                  { name: "True", value: true },
                  { name: "False", value: false },
                ]}
                value={"radio"}
                handleChange={handleChange}
              />
            </div>
          )}
        </form>
        <button onClick={onSubmit} className="form-button">
          Submit
        </button>
      </Card>
    </div>
  );
}
