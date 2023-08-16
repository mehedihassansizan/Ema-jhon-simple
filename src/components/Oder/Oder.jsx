// eslint-disable-next-line no-unused-vars
import React from 'react';
import Hero from '../../images/Hero.jpg';
import './Oder.css';

const Oder = () => {
    return (
        <div className='shop-now'>
            <div className="shop-detail">
                <h5>Sale up to <span className='dis-sp'>{70}%</span> off</h5>
                <h2 className='details-text'>New Collection For Fall</h2>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button className='shop-btn'>Shop Now</button>
            </div>
            <img src={Hero} alt="" />
        </div>
    );
};

export default Oder;