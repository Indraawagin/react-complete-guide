import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Indra', age: 20 },
      { name: 'Indri', age: 17 },
      { name: 'Radit', age: 10 },
    ],
  });

  const [otherState, setOtherState] = useState('use other value')

  // console.log(personsState, otherState);

  const switchName = (newName) => {
    // console.log('Was clicked!');
    // DONT DO THIS !! personsState.persons[0];
    setPersonsState({
      persons: [
        { name: newName, age: '22' },
        { name: 'Indri', age: '19' },
        { name: 'Radit', age: '12' },
      ]
    })
  }

  const inputChangedName = (event) => {
    setPersonsState({
      persons: [
        { name: 'Indra', age: '22' },
        { name: event.target.value, age: '19' },
        { name: 'Radit', age: '12' },
      ]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => switchName('Indraawagin')}>Switch Name</button> {/* New Binding */}
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}>
          My hobies play game</Person>

        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={switchName.bind(setPersonsState, 'Rogue')} // Old Binding
          changed={inputChangedName} />

        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age} />
      </header>
    </div>
  );
}
// return React.createElement('div', null, React.createElement('h1', null, 'Learn React'));

export default App;
