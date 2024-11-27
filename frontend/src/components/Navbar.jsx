import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
    return (
        <nav className="mb-36 pb-10">
            <div>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/results">Results</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
