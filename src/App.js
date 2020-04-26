import React, { useState, useEffect } from 'react';
import './App.css';
//import './components/Header.js;

//import './components/Card.js';  // deze movies moeten in de map components op Card.js komen te staan

    function App() {

        const [data, setData] = useState({results: []});

        useEffect(() => {
            (async () => {
                const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7e79f7263414fc6a1544c1a5e219faa6");
                const data = await res.json();
                setData(data);
                console.log(data.results); // test the outcome
                // written in javascript to add the elements (make the movie-cards) + content dynamically via createElement en appendChild

               /* for (let i=1;i<=data.results.length;i++)
                {
                    var node = document.createElement("h1");
                    var textnode = document.createTextNode(data.results[i].title);
                    node.appendChild(textnode);

                    var node2 = document.createElement("details");
                    var node3 = document.createElement("summary");
                    var textnode3 = document.createTextNode("Movie description");
                    node3.appendChild(textnode3);
                    node2.appendChild(node3);
                    var textnode2 = document.createTextNode(data.results[i].overview);
                    node2.appendChild(textnode2);
                    var node4 = document.createElement("img");
                    // voor de foto
                    var bron = document.createAttribute("src");       // Create the "src" attribute
                    bron.value = 'https://image.tmdb.org/t/p/original'+data.results[i].poster_path;
                    node4.setAttributeNode(bron);                          // Add the src attribute to img
                    // make figure and add the elements
                    var node0 = document.createElement("figure");
                    node0.appendChild(node)
                    node0.appendChild(node4);
                    node0.appendChild(node2);
                    // dan alles in de grote box plakken
                    document.getElementById("box").appendChild(node0);
                }*/

            })();
        }, []);

        //return data; // dit in Card.js steken samen met de fetch en dan in Home.js returnen in <main id="box"></main> tags
        return(
        data.results.map(item => {
        return (
                <figure>
                    <h1 key={item.id}>{item.original_title}</h1>
                     <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} />
                     <details><summary>Movie description</summary>
                         {item.overview}
                     </details>
                </figure>
        );
    })
        );
}
 export default App;
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