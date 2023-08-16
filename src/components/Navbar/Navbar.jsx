// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../../images/Logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={Logo} alt=""/>
            <div>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;