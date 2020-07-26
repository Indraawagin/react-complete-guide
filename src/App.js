import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Person from "./Person/Person";

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
  });

  // TODO: Hook Show Person
  const [showPersonState, setshowPersonState] = useState({
    showPersons: false,
  });

  //TODO: click={() => deletePersonHandler(index)}
  const deletePersonHandler = (personIndex) => {
    // const persons = personsState.persons.slice() //!OLD
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  };

  //TODO: changed={(event) => nameCangedHandler(event, person.id)}
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
    setPersonsState({
      persons: persons,
    });
  };

  //TODO: <button ... onClick={tooglePersonHandler}>
  const tooglePersonHandler = () => {
    const doesShow = showPersonState.showPersons;
    setshowPersonState({ showPersons: !doesShow });
  };

  //TODO: <button className={btnClass} ... >
  let btnClass = "";

  ///TODO: {persons}
  let persons = null;
  if (showPersonState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameCangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    btnClass = styles.Red;
  }

  ///TODO: <p className={assignedClasses.join(" ")}>This is really working!</p>
  const assignedClasses = [];
  if (personsState.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (personsState.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={tooglePersonHandler}>
          Show Name
        </button>
        {persons}
      </header>
    </div>
  );
};
// return React.createElement('div', null, React.createElement('h1', null, 'Learn React'));

export default App;
