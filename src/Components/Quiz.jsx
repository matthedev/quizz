import React, { useState, useEffect } from "react";
import { fetchData, showScore } from "../Redux/data-actions";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  font-weight: bold;
  overflow-y: scroll;
`;

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: tomato;
  width: 500px;
  margin: 20px auto;
  padding: 10px;
  height: 150px;

  @media screen and (max-width: 414px) {
    width: 250px;
    font-size: 14px;
  }
`;

const AnswerWrapper = styled.div`
width: 600px;
height: auto;
background-color: #fff;
display: flex;
margin: 80px auto;
flex-direction: column;
align-items: center;
border-radius: 5px;
margin-bottom: 20px;
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
}

@media screen and (max-width: 414px) {
  width: 320px;
}
@media screen and (max-width: 320px) {
 width: 290px;
}

span {
  width: 80%;
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 5px;
  text-align: center;
  background-color: hsla(0, 100%, 90%, 0.3);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 414px) {
    padding: 1.3rem
  }
  @media screen and (max-width: 375px) {
    padding: 1rem;
  }
  @media screen and (max-width: 360px) {
  padding: 0.8rem;
  }
  @media screen and (max-width: 320px) {
    padding: 0.3rem;
  }
}
`;

const PointWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  color: green;
`;

const Quiz = ({ data, fetchData, history, result, showScore, match }) => {
  const [questionNum, setQuestionNum] = useState(0);

  useEffect(() => {
    fetchData(match.params);
  }, [fetchData, match]);

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
        <span>{data && data.results[questionNum].question}</span>
      </QuestionWrapper>
      <AnswerWrapper>
        {data &&
          data.results[questionNum].incorrect_answers.map((inc) => {
            return (
              <span key={inc} onClick={wrongAnswerHandler}>
                {inc}
              </span>
            );
          })}
        <span onClick={correctAnswerHandler}>
          {data && data.results[questionNum].correct_answer}
        </span>
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
