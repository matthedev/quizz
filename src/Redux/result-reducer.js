const INIT_STATE = {
  result: 0,
};

const answerReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CORRECT_RESULT":
      return {
        ...state,
        result: state.result + payload,
      };
    case "RESET_RESULT":
      return {
        ...state,
        result: 0
      }
    default:
      return state;
  }
};

export default answerReducer;
