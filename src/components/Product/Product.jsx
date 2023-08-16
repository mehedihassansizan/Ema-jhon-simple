/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    const {img, name, price, seller, ratings} = props.product;
    // eslint-disable-next-line react/prop-types
    const addToCart = props.addToCart;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <h5>Manufacturer : {seller}</h5>
                <h5>Ratting : {ratings} Stars</h5>
            </div>
            <button onClick={() =>addToCart(props.product)} className='product-btn'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;