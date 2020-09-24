import { formFields } from "./formData";

const initialState = { formFields };

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FORM_DATA": {
      const currState = { ...state, ...action.payload };
      return currState;
    }
    case "GET_FORM_CONTROLS":
      return state;

    default:
      return state;
  }
}
