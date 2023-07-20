import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dark = () => {
    return (
        <div>
            <Link to='dark'>Dark</Link>
            <Link to='dark1'>Dark1</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Dark;