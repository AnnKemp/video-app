import React, { useState, useEffect } from 'react';
import CardView from "../CardView";
import Footer from "../Footer";

const Upcoming = () =>{
        const [data, setData] = useState({results: []});
        useEffect(() => {
            (async () => {
                const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=7e79f7263414fc6a1544c1a5e219faa6");
                const data = await res.json();
                setData(data);
            })();
        }, []);
        return(
            <div>
            <main id="box" style={{marginTop:"35px"}}><CardView data={data} /></main>
            <Footer />
            </div>
    );
}
export default Upcoming;