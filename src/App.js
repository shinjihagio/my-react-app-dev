import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App(props) {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'shinji', age: 30 },
      { name: 'eriko', age: 29 },
      { name: 'chinatsu', age: 2 }
    ],
    otherState: 'some other value'
  });

  console.log(personsState)

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: 'hagio', age: 30 },
        { name: 'eriko', age: 29 },
        { name: 'chinatsu', age: 5 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>hello git</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Watching TV</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
