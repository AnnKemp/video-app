import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes // door die array toe te voegen wordt er niet onnodig heropgebouwd

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
   // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
   // return () => {
    //  ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
   // };
  }, //[props.friend.id] // Only re-subscribe if props.friend.id changes
    );
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
