import React, { useState, useEffect } from 'react'; // dan zal ik moeten exporten of zo en dat via App.js tonen
import './App.css';

export function Card() {
    const [data, setData] = useState({results: []});

    useEffect(() => {
        (async () => {
            const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=7e79f7263414fc6a1544c1a5e219faa6");
            const data = await res.json();
            setData(data);
            console.log(data.results[0]);
        })();
    }, []);
    return data;
    };
