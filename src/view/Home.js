import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Nav from "../components/Navigation";

function Home() {
    return (
        <div>
        <Nav />
        <Header />
        <main id="box"><Card /></main>
        <Footer />
        </div>
    );
}
export default Home;
