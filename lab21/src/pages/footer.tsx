import React from "react";
import {Link} from "react-router-dom";

const Footer= ()=>{
    
    return(
        <nav className="footer">
            <ul>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/series">Series</Link>
                </li>
                <li>
                    <Link to="/all">All</Link>
                </li>
            </ul>
            <p>Aliaksey Shymko</p>
        </nav>
    )
}
export default Footer