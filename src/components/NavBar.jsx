import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>Bookmarks</h1>
            </Link>
            <ul>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/new">
                    <li>Add Bookmark</li>
                </Link>
            </ul>
        </nav>
    );
};

export default NavBar;