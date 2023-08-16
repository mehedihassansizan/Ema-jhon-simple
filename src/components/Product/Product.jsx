// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css';

const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <h5>Manufacturer : {seller}</h5>
                <h5>Ratting : {ratings} Stars</h5>
            </div>
            <button className='product-btn'>Add to cart</button>
        </div>
    );
};

export default Product;