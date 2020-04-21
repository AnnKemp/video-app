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
          <header>
              <h1 id="title"></h1>
              <video controls>
                  <source src="" type="video/mp4" />
                      Your browser does not support the video tag.
              </video>
              <p></p>
          </header>
          <main id="box"></main>
      </div>
  );
}
export default App;
