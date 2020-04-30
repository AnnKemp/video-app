import React from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
        <Header />
        <main id="box"><Card /></main>
        <Footer />
        </div>
    );
}
export default Home;
