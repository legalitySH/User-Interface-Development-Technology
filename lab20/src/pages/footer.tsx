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
                    <Link to="/cartoons">Cartoons</Link>
                </li>
            </ul>
            <p>@Copyright</p>
        </nav>
    )
}
export default Footer