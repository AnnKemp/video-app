import React, { useState, useEffect } from 'react';
import CardView from ".../CardView";

function MyForm {

      set
        this.state = { username: '' };
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
            </form>
        );
    }
}

const postedValue='';

if(postedValue==true)
{

    const Results = () => {
        const [data, setData] = useState({results: []});
        /* for a search query (met een form en inputveld ...) https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher */
        useEffect(() => {
            (async () => {
                const res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=7e79f7263414fc6a1544c1a5e219faa6&language=en-UK&include_adult=true&query=postedValue");

                const data = await res.json();
                setData(data);
                console.log(data.results); // test the outcome
            })();
        }, []);

        //return data;
        return (
            <main id="box" style={{marginTop:"55px"}}><CardView data={data} /></main>
        );
    }
}else{
    return(
        <h1>Search value not found.</h1>
    );
}
export default Results;