import React, { Fragment, useEffect, useRef } from "react"; //?React.Fragment and Auxiliary have the same usability
import PropTypes from "prop-types";
import styles from "./Person.module.css";
import withClass from "../../../hoc/withClass";

const Person = (props) => {
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  });

  return (
    <Fragment>
      <p onClick={props.click}>
        I'm a {props.name} and i'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        ref={inputFocus}
        onChange={props.changed}
        value={props.name}
      />
    </Fragment>
  );
};

export default withClass(Person, styles.Person);

Person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired,
};
