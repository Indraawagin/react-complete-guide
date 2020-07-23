import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: '1asd', name: "Indri", age: 17 },
      { id: '1eads', name: "Indra", age: 20 },
      { id: '12dd', name: "Radit", age: 10 },
    ],
    otherState: "use other value",
  });

  const [showPersonState, setshowPersonState] = useState({
    showPersons: false,
  });

  const deletePersonHandler = (personIndex) => {
    // const persons = personsState.persons.slice() //!OLD
    const persons = [...personsState.persons]
    persons.splice(personIndex, 1)
    setPersonsState({ persons: persons })
  }

  const nameCangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...personsState.persons[personIndex]
    }

    // const person = Object.assign({}, personsState.persons[personIndex]) //!OLD

    person.name = event.target.value;

    const persons = [...personsState.persons]
    persons[personIndex] = person

    setPersonsState({
      persons: persons
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
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameCangedHandler(event, person.id)} />
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
