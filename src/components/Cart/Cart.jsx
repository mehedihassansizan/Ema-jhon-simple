/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'
  import { faRightLong } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    // console.log(props.cart);
    const length = props.cart.length;
  return (
    <div>
      <div className="cart-details">
      <h6>Order Summary</h6>
        <h5>Selected Item:{length}</h5>
        <h5>Total Price:$</h5>
        <h5>Total Shipping Charge:$</h5>
        <h5>Tax:$</h5>
        <h6>Grand Total:$</h6>
      </div>
      <button className="clear-btn">
        Clear Cart <FontAwesomeIcon icon={faTrash} />
      </button>
      <br />
      <button className="review-btn">
        Review Order <FontAwesomeIcon icon={faRightLong} />
      </button>
    </div>
  );
};

export default Cart;
