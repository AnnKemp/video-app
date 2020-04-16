import React, { useState } from 'react';
import './App.css';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

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
