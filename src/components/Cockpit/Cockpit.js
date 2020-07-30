import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.svg";
import styles from "./Cockpit.module.css";
import PropTypes from "prop-types";

const Cockpit = (props) => {
  const togleBtnRef = useRef(null);

  // todo: <button className={btnClass} onClick={props.clicked}>
  let btnClass = "";
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  // todo: <p className={assignedClasses.join(" ")}>This is really working!</p>
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Show Name
      </button>
      <button onClick={props.login}>Log In</button>
    </div>
  );
};

Cockpit.propTypes = {
  showPersons: PropTypes.bool.isRequired,
  persons: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Cockpit;
