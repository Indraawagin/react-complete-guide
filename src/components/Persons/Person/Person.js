import React, { Fragment, useEffect, useRef, useContext } from "react"; //?React.Fragment and Auxiliary have the same usability
import PropTypes from "prop-types";
import styles from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

const Person = (props) => {
  // todo: {authContext.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
  const authContext = useContext(AuthContext);

  // todo: ref={inputFocus}
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  });

  return (
    <Fragment>
      {authContext.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
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
