import { combineReducers } from "redux";
import { dashboardReducer } from "../components/Dashboard/dashboardReducer";

const rootReducer = combineReducers({
  dashboardData: dashboardReducer,
  // formData: formReducer,
});

export default rootReducer;
