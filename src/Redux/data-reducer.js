import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./data-types";

const INIT_STATE = {
  data: null,
};

const dataReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
