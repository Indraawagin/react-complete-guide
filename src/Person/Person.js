import React from "react";
import styled from "styled-components";
// import "./Person.css";

const StyleDiv = styled.div`
  width: 60%;
  margin: 15px auto;
  padding: 16px;
  align-items: center;
  border: 1px solid #61dafb;
  box-shadow: 0 2px 3px #ccc;

  @media (min-width: 520px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyleDiv>
      <p onClick={props.click}>
        I'm a {props.name} and i'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
  );
};

export default person;
