import React, { Fragment } from "react";
import styles from "./Person.module.css";
// import Auxiliary from "../../../hoc/Auxiliary";

const person = (props) => {
  return (
    <Fragment className={styles.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and i'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Fragment>
  );
};

export default person;
