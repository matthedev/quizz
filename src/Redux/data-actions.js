import axios from "axios";

export const fetchData = (params) => async (dispatch) => {
  const {category, diff} = params
  try {
    const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${diff}`);
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
    
  } catch (error) {
    
    dispatch({ type: "FETCH_DATA_FAILURE", payload: "Something's wrong!" });
  }
};

export const showScore = () => (dispatch) => {
  dispatch({ type: "CORRECT_RESULT", payload: 1 });
};

export const resetResult = () => (dispatch) => {
  dispatch({type: "RESET_RESULT"})
}
