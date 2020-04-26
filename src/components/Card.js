import React, { useState, useEffect } from 'react';
import './App.css';

export const Card = () => {
    const [data, setData] = useState({results: []});

    useEffect(() => {
        (async () => {
            /* for a search query (met een form en inputveld ...) https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher */

            const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7e79f7263414fc6a1544c1a5e219faa6");
            const data = await res.json();
            setData(data);
            console.log(data.results[0]);
        })();
    }, []);

    //return data;
    return (
        <div>
            <main id="box">
            {
                 data.results.map(item => (
                <h1 key={item.id}>{item.original_title}</h1>
                  ))
            }
            </main>
        </div>
    );
    }
