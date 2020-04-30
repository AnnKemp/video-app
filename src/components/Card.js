import React, { useState, useEffect } from 'react';

const Card = () => {
    const [data, setData] = useState({results: []});

    useEffect(() => {
        (async () => {
            const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7e79f7263414fc6a1544c1a5e219faa6");
            const data = await res.json();
            setData(data);
            console.log(data.results); // test the outcome
        })();
    }, []);

    //return data;
    return(
        data.results.map(item => { // this way I can map all the needed elements instead of one (with two returns nested)
            return (
                <figure>
                    <h1 key={item.id}>{item.original_title}</h1>
                    <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} alt={item.original_title} />
                    <em>&#10031; {item.vote_average}</em>
                    <details><summary>Movie description</summary>
                        {item.overview}
                    </details>
                </figure>
            );
        })
    );
}
export default Card;






/*

// code voorbeelden van hoe ik data moet fetchen
const useFetch = (url) => {
const [data, setData] = useState(null);
useEffect(() => {
(async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
})();
}, [url]);
return data;
};
https://dev.to/bdbch/react-hooks-for-data-part-1-fetching-data-28ge
import { useEffect, useState } from 'react'

// The hook is just a simple function which we can export
export const useFetchBooks = () => {

// First we define the necessary states for our hook
// this includes book, the loading state and potential errors
const [books, setBooks] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

// useEffect can be compared to componentDidMount,
// componentDidUpdate and componentDidUnmount
// read more about useEffect here:
// https://reactjs.org/docs/hooks-effect.html
useEffect(() => {

// First we set the loading and error states
setLoading(true)
setError(null)

fetch('https://library.com/api/books')
.then(res => res.json())
.then(json => {
setLoading(false)
if (json.books) {
  setBooks(json.books)
} else {
  setBooks([])
}
})
.catch(err => {
setError(err)
setLoading(false)
})
}, [])
return { books, loading, error }
}
*/