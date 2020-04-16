import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => { // is gelijk aan componentDidMount() én componentDidUpdate()
    // perform data fetching or call some other imperative API, hier moet ik dus mijn data gaan fetchen
    document.title = `You clicked ${count} times`;
    return function cleanup() { // is gelijk aan: componentWillUnmount() bij OOP
      // hier komt de cleanup code
    };
  });

  return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
  );
}
export default App;
