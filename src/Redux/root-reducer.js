import { combineReducers } from "redux";
import dataReducer from "./data-reducer";
import resultReducer from "./result-reducer";

const rootReducer = combineReducers({
  data: dataReducer,
  result: resultReducer,
});

export default rootReducer;
