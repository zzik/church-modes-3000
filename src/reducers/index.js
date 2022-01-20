import modeReducer from "./mode";
import rootReducer from "./root";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  mode: modeReducer,
  root: rootReducer,
});

export default allReducers