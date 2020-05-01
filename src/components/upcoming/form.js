import React, { useState, useEffect } from 'react';

const MyForm= () => {
    const [movie, setMovie] = useState(""); // hiervan moet ik het formaat nog even checken
    const [searchResult, setSearchResult] = useState("");

function handleClick(event) {
setMovie(event.target.value);
 }
// vanalles mis en zo dus dat nog even uitpluizen misschien moet dit ook Search gaan heten
useEffect(() => {
    let postedValue=movie;

    (async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie?api_key=7e79f7263414fc6a1544c1a5e219faa6&query=postedValue");
        const data = await res.json();
        setSearchResult(data);
        console.log(searchResult.results); // test the outcome
    })();
}, []);

        return (
                <form>
                    <input type="text" placeholder="Search your movie here" className="complete" />
                    <button className="send" onClick={handleClick}></button>
            </form>
        );

}
export default MyForm;