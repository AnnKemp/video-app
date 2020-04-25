import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Card.js';  // vinden hoe we dat binnenhalen

import axios from 'axios';

    function App() {
        //const [data, setData] = useState({results: []});

      /*  useEffect(() => {// deze voor data fetching
            axios
                .get("https://api.themoviedb.org/3/movie/upcoming?api_key=7e79f7263414fc6a1544c1a5e219faa6")
                .then(res => { //console.log(res)
                 setData(res.data)
                    console.log(data.results[0])
                  }, []);
            // for the movies
            for (let i=1;i<=data.results.length;i++)
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
            }
*/

            return (
                <div>
                    <header>
                        <h1 id="title"></h1>

                        <p></p>
                    </header>
                    <main id="box"></main>
                {
               //   data.results.map(item => (
               // <h1 key={item.id}>{item.original_title}</h1>
                  //  ))
                    }
                </div>
            );
    }
 export default App;
/*const useFetch = (url) => {
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