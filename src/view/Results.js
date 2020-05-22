import React, { useState, useEffect, useContext } from 'react';
import CardView from "../components/CardView";
import Search from "../components/Search";

const Results = () => {
    let data= {Search};
    console.log(data); // dit werkt dus niet, het was de log van de form.js die ik op deze pagina te zien kreeg in de log

        return (
            <main id="box" style={{marginTop:"55px"}}><CardView data={data} /></main>
        );
}

export default Results;