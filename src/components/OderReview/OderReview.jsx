/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './OderReview.css';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';



const OderReview = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const clearCartAndReview = (id) =>{
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    const clearTheCart = () =>{
        setCart([])
        deleteShoppingCart();
    }

    return (
        <div className='products-details'>
            <div className='product-review-container'>
                {
                    cart.map(p => 
                    <ReviewItem
                         key={p.id} 
                         product={p}
                         clearCartAndReview={clearCartAndReview}
                    ></ReviewItem>)
                }
            </div>
            <div className='re-shopping-cart-container'>
                <Cart clearTheCart={clearTheCart} cart={cart}>
                    <Link to='/Proceed_Checkout'>
                        <button className='checkout-btn'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard} /></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};
export default OderReview;