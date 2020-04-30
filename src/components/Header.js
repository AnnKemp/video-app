import React from "react";
//import { NavLink } from "react-router-dom"; // da's ook voor die navigatie

// die moet ik waarschijnlijk nog installeren: https://codeburst.io/getting-started-with-react-router-5c978f70df91
// zie url  : voor uitleg
/*<nav> // dit is voor de navigatie maar misschien steek ik die nog appart // dit moet in de function Header komen bij in return
        <NavLink exact activeClassName="active" to="/">
            Home
        </NavLink>
        <NavLink activeClassName="active" to="/upcoming">
            Upcoming movies
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
            Find movie
        </NavLink>
    </nav>*/
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


