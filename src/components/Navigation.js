import React from "react";
import SearchIcon from '@material-ui/icons/Search';
//import { NavLink } from "react-router-dom"; // da's voor die navigatie

// die moet ik waarschijnlijk nog installeren: https://codeburst.io/getting-started-with-react-router-5c978f70df91

function Nav() {
    return (
        <nav>
            <a>Home</a><a>Upcoming movies</a><a>Contact</a>
            <form><input className="invul" type="text" /><input className="knop" type="submit" value="Search" /><SearchIcon /></form>
        </nav>
    );
}

export default Nav;
/*
<NavLink exact activeClassName="active" to="/">
    Home
</NavLink>
<NavLink activeClassName="active" to="/upcoming">
    Upcoming movies
</NavLink>
<NavLink activeClassName="active" to="/contact">
    Contact
</NavLink>
*/
