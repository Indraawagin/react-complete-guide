import React, { useState } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Auxiliary from "../hoc/Auxiliary";
import AuthContext from "../context/auth-context";

//TODO: APP
const App = (props) => {
  // TODO: Hooks Person
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "1asd", name: "Indri", age: 17 },
      { id: "1eads", name: "Indra", age: 20 },
      { id: "12dd", name: "Radit", age: 10 },
    ],
    otherState: "use other value",
    changeCounter: 0,
  });

  // TODO: Hook Show Person
  const [showPersonState, setshowPersonState] = useState({
    showPersons: false,
  });

  // TODO: Hook Authentication
  const [auth, setAuth] = useState({
    authenticated: false,
  });

  //TODO: clicked={deletePersonHandler}
  const deletePersonHandler = (personIndex) => {
    // const persons = personsState.persons.slice() //!OLD
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  };

  //TODO: changed={nameCangedHandler}
  const nameCangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...personsState.persons[personIndex],
    };
    // const person = Object.assign({}, personsState.persons[personIndex]) //!OLD
    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[personIndex] = person;
    setPersonsState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  //TODO:  clicked={tooglePersonHandler}
  const tooglePersonHandler = () => {
    const doesShow = showPersonState.showPersons;
    setshowPersonState({ showPersons: !doesShow });
  };

  //Todo: login={loginHandler}
  const loginHandler = () => {
    setAuth({
      authenticated: true,
    });
  };

  ///TODO: {persons}
  let persons = null;
  if (showPersonState.showPersons) {
    persons = (
      <Persons
        persons={personsState.persons}
        clicked={deletePersonHandler}
        changed={nameCangedHandler}
        isAuthenticated={auth.authenticated}
      />
    );
  }

  return (
    <Auxiliary>
      <header className={styles.AppHeader}>
        <AuthContext.Provider
          value={{ authenticated: auth.authenticated, login: loginHandler }}
        >
          <Cockpit
            title={props.appTitle}
            showPersons={showPersonState.showPersons}
            persons={personsState.persons}
            clicked={tooglePersonHandler}
          />
          {persons}
        </AuthContext.Provider>
      </header>
    </Auxiliary>
  );
};
// return React.createElement('div', null, React.createElement('h1', null, 'Learn React'));

export default withClass(App, styles.App);
