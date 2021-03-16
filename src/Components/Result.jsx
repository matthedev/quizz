import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { resetResult } from "../Redux/data-actions";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;

  h1 {
    width: 100%;
    text-align: center;
  }

  h3 {
    width: 120px;
    background-color: red;
    margin: 80px auto;
    text-align: center;
    cursor: pointer;
  }
`;

const Result = ({ history, result, resetResult }) => {
  const onStartHandler = () => {
    resetResult();
    history.push("/");
  };

  return (
    <Wrapper>
      <h1>Your have {result} correct answers!</h1>
      <h3 onClick={onStartHandler}>Start again!</h3>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  result: state.result.result,
});

export default connect(mapStateToProps, { resetResult })(Result);
