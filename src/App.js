import React, { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

<<<<<<< HEAD
//TODO: <StyledButton  alt={showPersonState.showPersons} onClick={tooglePersonHandler}/>
=======
>>>>>>> b95f03bcb5c64bb259e628d1d914bd1d701c6b39
const StyledButton = styled.button`
background-color: ${(props) => (props.alt ? "#D42E3E" : "#007BFF")};
color: white;
font: inherit;
padding: 8px;
border-radius: 5px;
border: 1px solid ${(props) => (props.alt ? "#dc3545" : "#0062cc")};
cursor: pointer;
&:hover {
  background-color: ${(props) => (props.alt ? "#dc3545" : "#0069d9")};
`;

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

  //TODO: <button style={style} onClick={tooglePersonHandler}>
  const tooglePersonHandler = () => {
    const doesShow = showPersonState.showPersons;
    setshowPersonState({ showPersons: !doesShow });
  };

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
  }

  ///TODO: <p className={classes.join(" ")}>This is really working!</p>
  const classes = [];
  if (personsState.persons.length <= 2) {
    classes.push("red");
  }
  if (personsState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton
          alt={showPersonState.showPersons}
          onClick={tooglePersonHandler}
        >
          Show Name
        </StyledButton>
        {persons}
      </header>
    </div>
  );
};
// return React.createElement('div', null, React.createElement('h1', null, 'Learn React'));

export default App;
