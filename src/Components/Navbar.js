import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to='contact'>Contact Us</Link>
            <Link to='products'>Products</Link>
            <Link to='dark'>Dark</Link>
        </div>
    );
};

export default Navbar;