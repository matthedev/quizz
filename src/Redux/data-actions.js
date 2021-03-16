import axios from "axios";

export const fetchData = () => async (dispatch) => {
  try {
    const res = await axios.get("https://opentdb.com/api.php?amount=10");
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
    console.log(res.data);
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "FETCH_DATA_FAILURE", payload: "Something's wrong!" });
  }
};

export const showScore = () => (dispatch) => {
  dispatch({ type: "CORRECT_RESULT", payload: 1 });
};

export const resetResult = () => (dispatch) => {
  dispatch({type: "RESET_RESULT"})
}
