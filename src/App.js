import React, { useState, useEffect } from 'react';
import './App.css';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // je mag meerdere hooks gebruiken in een enkel component

  function Example(props) { // kan ik die in de functie gebruiken? Nog even checken . . .
    // You can use Hooks here!
    return <div />;
  }
  const Examplee = (props) => { // exact hetzelfde als de functie hierboven, mag ik die hier gebruiken? Nog even checken . . .
    // You can use Hooks here!
    return <div />;
  }

  return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
  );
}

function App() {
  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default App;
