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
  background: linear-gradient(
      135deg,
      #708090 21px,
      #d9ecff 22px,
      #d9ecff 24px,
      transparent 24px,
      transparent 67px,
      #d9ecff 67px,
      #d9ecff 69px,
      transparent 69px
    ),
    linear-gradient(
        225deg,
        #708090 21px,
        #d9ecff 22px,
        #d9ecff 24px,
        transparent 24px,
        transparent 67px,
        #d9ecff 67px,
        #d9ecff 69px,
        transparent 69px
      )
      0 64px;
  background-color: #708090;
  background-size: 64px 128px;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
  padding: 40px;
  border-radius: 15px 50px;

  select {
    width: 200px;
  }

  span {
    text-align: center;
    border: 2px solid #ccc;
    cursor: pointer;
    width: 30px;
    padding: 25px;
    margin: 150px auto;
    &:hover {
      color: red;
    }
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Starter = ({ history, fetchData }) => {
  const [category, setCategory] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((res) => setCategory(res.data.results));
  }, []);

  const onStartHandler = () => {
    history.push("/quiz");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <form onSubmit={handleSubmit}>
          <LabelWrapper>
            <label htmlFor="category">Choose Category:</label>
            <select value={value} onChange={handleChange}>
              {category &&
                category.map((cat) => {
                  return (
                    <option value={cat.category} key={cat.question}>
                      {cat.category}
                    </option>
                  );
                })}
            </select>
          </LabelWrapper>
          <LabelWrapper>
            <label htmlFor="difficulty"> Choose Difficulty:</label>
            <select value={value} onChange={handleChange}>
              <option value="Any">Any Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </LabelWrapper>
        </form>
        <span onClick={onStartHandler}>Start Quiz!</span>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Starter;
