import React from "react";

const styles={height:"2em"} // om eventueel inline styles te gebruiken voor de footer maar dat weet ik nog niet zeker

function Footer() {
    return (
        <div style={styles}>
            <h1>Dit is dus de footer van &copy; Ann Kemp</h1>
        </div>
    );
}

export default Footer;