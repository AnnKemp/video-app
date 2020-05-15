import React, { useState } from 'react';

const MyForm= () => {
    const [movie, setMovie] = useState(""); // here comes the value from the input-field
    const [data, setData] = useState({results: []}); // here comes the data from the api-search

    let film=""; // initiating let film

    function myChangeHandler(event) { // if you type something in the input-field
        setMovie(event.target.value);
    }

    function mySubmitHandler(event){ // if you click on 'search'
      event.preventDefault(); // normally with a submit-button but ... anyway . . .
      film=movie;
      Search();
    }
    const Search=() => {
            if(movie!=="") {
            const url = "https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=";
            let total = url+film;

                fetch(total)
                    .then(response => response.json())
                    .then(data => {
                       console.log(data);
                        setData(data);
                        // hier kan ik eigenlijk de Search() functie aanroepen die deel is van MyForm maar dan niet in de html maar daarboven in de javascript code nog even opzoeken hoe ik dat moet doen   misschien via local memory of anders moet ik hogerop naar index.js

                        return data; // ok data gevonden en er uit gehaald nu nog ze kunnen doorsturen om ze te tonen op een andere pagina
                    })
            }else{}
    }
        return (
                <form>
                    <input type="text" placeholder="Search your movie here" className="complete" onChange={myChangeHandler} />
                    <button className="send" onClick={mySubmitHandler}></button>
            </form>
        );
}

export default MyForm;