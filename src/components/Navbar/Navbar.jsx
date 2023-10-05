// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Logo from '../../images/Logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../ContextProvider/ContextProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthProvider)

    const handleSignOut = () => {
        logOut()
        .then(() =>{})
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <nav className='navbar'>
            <img src={Logo} alt=""/>
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Oder Review</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ?
                    <>
                        <span className='user-email'>{user.email}</span>
                        <button onClick={handleSignOut} className='shop-btn signOut-Btn'>Sign out</button>
                    </> :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signUp">Sign Up</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Navbar;