import React, { useState, useEffect } from "react";
import { fetchData, showScore } from "../Redux/data-actions";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const QuestionWrapper = styled.div`
  width: 550px;
  height: 150px;
  background-color: tomato;
  border-radius: 15px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerWrapper = styled.div`
  display: flex;
  margin: 80px auto;
  background-color: #fff;
  background-image: linear-gradient(
      90deg,
      transparent 79px,
      #abced4 79px,
      #abced4 81px,
      transparent 81px
    ),
    linear-gradient(#eee 0.1em, transparent 0.1em);
  background-size: 100% 1.2em;
  width: 50%;
  height: 300px;
  border-radius: 15px;

  li {
    line-height: 55px;
    cursor: pointer;
    background-color: hsla(0, 100%, 90%, 0.3);
    margin: 10px;
    width: 700px;
    text-align: center;
    border-radius: 15px;
    &:hover {
      color: red;
    }
  }
`;

const PointWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;
  color: green;
`;

const Quiz = ({ data, fetchData, history, result, showScore }) => {
  const [questionNum, setQuestionNum] = useState(0);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const wrongAnswerHandler = () => {
    const nextQuestion = questionNum + 1;
    if (questionNum < 9) {
      setQuestionNum(nextQuestion);
    } else {
      history.push("/result");
    }
  };

  const correctAnswerHandler = () => {
    const nextQuestion = questionNum + 1;
    if (questionNum < 9) {
      setQuestionNum(nextQuestion);
    } else {
      history.push("/result");
    }
    showScore();
  };

  return (
    <Wrapper>
      <QuestionWrapper>
        {data && data.results[questionNum].question}
      </QuestionWrapper>
      <AnswerWrapper>
        <ul>
          {data &&
            data.results[questionNum].incorrect_answers.map((inc) => {
              return (
                <li key={inc} onClick={wrongAnswerHandler}>
                  {inc}
                </li>
              );
            })}
          <li onClick={correctAnswerHandler}>
            {data && data.results[questionNum].correct_answer}
          </li>
        </ul>
      </AnswerWrapper>
      <PointWrapper>You have {result} points!</PointWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
  result: state.result.result,
});

export default connect(mapStateToProps, { fetchData, showScore })(Quiz);
