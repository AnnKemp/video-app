import React from 'react';
import './App.css';
import Home from "./view/Home";
import { MyForm } from "./components/Search";

function App() {
    return(
            <MyForm>
        <div>
            <Home />
        </div>
            </MyForm>
    );
}
export default App;


