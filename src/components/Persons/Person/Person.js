import React, { Fragment } from "react"; //?React.Fragment and Auxiliary have the same usability
import styles from "./Person.module.css";
// import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";

const person = (props) => {
  return (
    <Fragment>
      <p onClick={props.click}>
        I'm a {props.name} and i'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Fragment>
  );
};

export default withClass(person, styles.Person);
