import React, { useState } from "react";
import Radium, { StyleRoot } from "radium";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "1asd", name: "Indri", age: 17 },
      { id: "1eads", name: "Indra", age: 20 },
      { id: "12dd", name: "Radit", age: 10 },
    ],
    otherState: "use other value",
  });

  const [showPersonState, setshowPersonState] = useState({
    showPersons: false,
  });

  const deletePersonHandler = (personIndex) => {
    // const persons = personsState.persons.slice() //!OLD
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  };

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

  const tooglePersonHandler = () => {
    const doesShow = showPersonState.showPersons;
    setshowPersonState({ showPersons: !doesShow });
  };

  const style = {
    backgroundColor: "#007BFF",
    color: "white",
    font: "inherit",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #007BFF",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
    },
  };

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
    style.backgroundColor = "#D42E3E";
    style[":hover"] = {
      backgroundColor: "#dc3545",
      borderColor: "#dc3545",
    };
  }

  const classes = [];
  if (personsState.persons.length <= 2) {
    classes.push("red");
  }
  if (personsState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <StyleRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={tooglePersonHandler}>
            Show Name
          </button>
          {persons}
        </header>
      </div>
    </StyleRoot>
  );
};
// return React.createElement('div', null, React.createElement('h1', null, 'Learn React'));

export default Radium(App);
