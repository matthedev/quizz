import { combineReducers } from "redux";
import dataReducer from "./data-reducer";
import answerReducer from "./answer-reducer";

const rootReducer = combineReducers({
  data: dataReducer,
  answers: answerReducer,
});

export default rootReducer;
