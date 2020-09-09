import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'shinji', age: 30 },
      { name: 'eriko', age: 29 },
      { name: 'chinatsu', age: 2 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'hagio', age: 30 },
        { name: 'eriko', age: 29 },
        { name: 'chinatsu', age: 5 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>hello git</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Watching TV</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

  export default App;
