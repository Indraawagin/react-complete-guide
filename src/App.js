import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Indra", age: 20 },
      { name: "Indri", age: 17 },
      { name: "Radit", age: 10 },
    ],
    otherState: "use other value",
  });

  const [showPersonState, setshowPersonState] = useState({
    showPersons: false,
  });

  // console.log(personsState, otherState);

  const switchName = (newName) => {
    // console.log('Was clicked!');
    // DONT DO THIS !! personsState.persons[0];
    setPersonsState({
      persons: [
        { name: newName, age: "22" },
        { name: "Indri", age: "19" },
        { name: "Radit", age: "12" },
      ],
    });
  };

  const inputChangedName = (event) => {
    setPersonsState({
      persons: [
        { name: "Indra", age: "22" },
        { name: event.target.value, age: "19" },
        { name: "Radit", age: "12" },
      ],
    });
  };

  const tooglePersonHandler = () => {
    const doesShow = showPersonState.showPersons;
    setshowPersonState({ showPersons: !doesShow });
  };

  let persons = null;
  if (showPersonState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map(person => {
          return (
            <Person
              name={person.name}
              age={person.age} />
          )
        })}
      </div>
    );
  }

  const style = {
    backgroundColor: "#61DAFB",
    font: "inherit",
    padding: "8px",
    border: "1px solid #61DAFB",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button style={style} onClick={tooglePersonHandler}>
          Show Name
        </button>
        {persons}
      </header>
    </div>
  );
};
// return React.createElement('div', null, React.createElement('h1', null, 'Learn React'));

export default App;
