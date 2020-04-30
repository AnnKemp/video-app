import React from "react";

function Header() {
    return (
    <header>
        <h1 id="title">Here comes the title</h1>
        <video controls>
            <source type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        <p>And here the description</p>
    </header>
    );
}
export default Header;


