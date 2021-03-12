const INIT_STATE = {
  correct: 0,
};

const answerReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CORRECT_ANSWER":
      return {
        ...state,
        correct: state.correct + payload,
      };
    default:
      return state;
  }
};

export default answerReducer;
