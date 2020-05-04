import React, { useState, useEffect } from 'react';
import CardView from ".../CardView";
import Search from "form";

const Results = () => {
        //return data;
    let data= {Search}
    // nog eens check of dit werkt
        return (
            <main id="box" style={{marginTop:"55px"}}><CardView data={data} /></main>
        );
}

export default Results;