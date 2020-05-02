import React from "react";

const CardView = (props) => {
    return (
        props.data.results.map(item => { // this way I can map all the needed elements instead of one (with two returns nested)
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
};

export default CardView;