import { combineReducers } from "redux";
import { dashboardReducer } from "../components/Dashboard/dashboardReducer";
import { formReducer } from "../components/Forms/formReducer";

const rootReducer = combineReducers({
  dashboardData: dashboardReducer,
  formData: formReducer,
});

export default rootReducer;
