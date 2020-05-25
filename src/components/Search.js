import React, { useState, createContext, useContext } from 'react';

export const movieContext= createContext(); // step 1: create the context hook

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
                        setData(data);
                        // adding the data to the movieContext via Provider
                        return <movieContext.Provider value={data} />; // step 2: add data to the context hook
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
function useMovieContext(){
    return useContext(movieContext); // step 3: get data out of the context hook
}
export { useMovieContext, MyForm };
export default MyForm;
