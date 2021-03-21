import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const ContentWrapper = styled.div`
  background-image: url("https://i.imgur.com/tisbV2F.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
  padding: 40px;
  border-radius: 15px 50px;

  @media screen and (max-width: 320px) {
    width: 250px;
    border-radius: 10px;
    height: 250px;
  }
 


  select {
    width: 200px;
    text-shadow: 2px 2px 8px #111;
  }

  span {
    font-size: 20px;
    color: tomato;
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 2px 2px #111;
    border: 2px solid #f2f2f2;
    cursor: pointer;
    width: 50px;
    padding: 30px;
    margin: 150px auto;
    transition: all 0.5s ease;
    &:hover {
      color: green;
    }
    @media screen and (max-width: 320px) {
      margin: 80px auto;
      padding: 15px;
    }



`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  label {
    color: white;
  }

  select {
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: rgba(106, 90, 205, 0.8);
    font-family: sans-serif;
    font-weight: 700;
    color: white;
    cursor: pointer;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
  }
`;

const Starter = ({ history }) => {
  const [category, setCategory] = useState(null);
  const [value, setValue] = useState(9);
  const [diff, setDiff] = useState("easy");

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setCategory(res.data.trivia_categories));
  }, []);

  const onStartHandler = () => {
    history.push(`/quiz/${value}/${diff}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const catHandleChange = (e) => {
    setValue(e.target.value);
  };

  const diffHandleChange = (e) => {
    setDiff(e.target.value);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <form onSubmit={handleSubmit}>
          <LabelWrapper>
            <label htmlFor="category">Choose Category:</label>
            <select value={value} onChange={catHandleChange}>
              {category &&
                category.map((cat) => {
                  return (
                    <option value={cat.id} key={cat.id}>
                      {cat.name}
                    </option>
                  );
                })}
            </select>
          </LabelWrapper>
          <LabelWrapper>
            <label htmlFor="difficulty"> Choose Difficulty:</label>
            <select value={diff} onChange={diffHandleChange}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </LabelWrapper>
        </form>
        <span onClick={onStartHandler}>Start Quiz!</span>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Starter;
