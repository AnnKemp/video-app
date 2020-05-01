import React, { useState, useEffect } from 'react';

const Upcoming = () =>{
// dit nog een beetje aanpassen
        const [data, setData] = useState({results: []});

        useEffect(() => {
            (async () => {
                const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=7e79f7263414fc6a1544c1a5e219faa6");
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
export default Upcoming;