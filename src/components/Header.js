import React, {useEffect, useState} from "react";

const Header = () => {

        const [data, setData] = useState({results: []});

        useEffect(() => {
            (async () => {
                const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7e79f7263414fc6a1544c1a5e219faa6");
                const data = await res.json();
                setData(data);
                console.log(data.results); // test the outcome
                let gegevens=[];
                gegevens=data;
                console.log(gegevens);
            })();
        }, []);
    return (
    <header>
        <h1 id="title">De titel</h1>
        <video controls>
            <source type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        <p>And here the description</p>

    </header>
    );
}
export default Header;
/*

<h1 key={item.id}>{item.original_title}</h1>
  <h1 id="title">{data.results[0].original_title}</h1>
<img src={"https://image.tmdb.org/t/p/original"+item.poster_path} alt={item.original_title} />
<em>&#10031; {item.vote_average}</em>
<details><summary>Movie description</summary>
    {item.overview}

          let titel={gegevens.results[20].original_title};
                document.getElementById("title").innerText=titel;
                let text=gegevens.results[0].overview;
                document.getElementsByTagName('p')[0].innerText=text;

                // for the poster on the video
                let place=document.getElementsByTagName('video')[0];
                let att=document.createAttribute('poster');
                att.value='https://image.tmdb.org/t/p/original'+gegevens.results[0].poster_path;
                place.setAttributeNode(att);

                // for the video in the source  //  org/3/movies/get-movie-videos) endpoint or generic [movie](https://developers.themoviedb.org/3/movies/get-movie-details)… moet ik een nieuwe fetch op doen
               let movie=document.getElementsByTagName('source')[0]; // select the right element
                let attrib=document.createAttribute('src'); // create the attribute
                attrib.value=gegevens.results[0].video; // add the content to the attribute
                movie.setAttributeNode(attrib); // put the attribute on the tag 'source'*/