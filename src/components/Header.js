import React from "react";
//import { NavLink } from "react-router-dom"; // da's ook voor die navigatie

// die moet ik waarschijnlijk nog installeren: https://codeburst.io/getting-started-with-react-router-5c978f70df91
// zie url  : voor uitleg
function Header() {
    return (
       <h1>Dit is de header </h1>
        /*<nav> // dit is voor de navigatie maar misschien steek ik die nog appart
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
    );
}
export default Header;