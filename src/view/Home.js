import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; // moet ik dat hier bijzetten? of is dit 'old' stuff?
import './App.css';
import App from './App';

// de header nog importeren
// de footer nog importeren
import Upcoming from './upcoming';
import Contact from './contact';
import Header from './Header';

function Home() {
    return (
        <Header />
    );
}
export default Home;
