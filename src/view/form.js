import React, { useState } from 'react';

const MyForm= () => {
    const [movie, setMovie] = useState(""); // hier komt de waarde die in het invulveld wordt ingevuld
    const [data, setData] = useState({results: []}); // hier komen de data opgevraagd van de api

    function myChangeHandler(event) {
        setMovie(event.target.value);
    }
    let film="";

    function mySubmitHandler(event){
      event.preventDefault();
      film=movie;
      Search();
    }
   // "https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=" // dit is de juiste query

    const Search=() => {
            alert(film);
            if(movie!=="") {
            const url = "https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=";
            let total = url+film;

             let foundMovies;

                fetch(total)
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                        setData(data);
                        return foundMovies=data; // ok data gevonden en er uit gehaald nu nog ze kunnen terugsturen om ze te tonen
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