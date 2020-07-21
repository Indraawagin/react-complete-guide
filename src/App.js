import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Indra', age: 20 },
      { name: 'Indri', age: 17 },
      { name: 'Radit', age: 10 },
    ]
  };

  switchName = () => {
    // console.log('Was clicked!');
    // DONT DO THIS !! this.state.persons[0];
    this.setState({
      persons: [
        { name: 'Indra', age: '22' },
        { name: 'Indri', age: '19' },
        { name: 'Radit', age: '12' },
      ]
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.switchName}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobies play game</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        </header>
      </div>
    )
  }
  // return React.createElement('div', null, React.createElement('h1', null, 'Learn React'));
}

export default App;
