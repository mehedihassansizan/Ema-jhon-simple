/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'
  import { faRightLong } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    // console.log(props.cart);
    // const cart = props.cart;
    const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
      // if (product.quantity === 0) {
      //   product.quantity = 1;
      // }
      // product.quantity = product.quantity || 1;
      totalPrice += product.price * product.quantity;
      totalShipping += product.shipping * product.quantity;
      quantity += product.quantity;
    }

    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div>
      <div className="cart-details">
        <h6>Order Summary</h6>
        <h5>Selected Item:{quantity}</h5>
        <h5>Total Price: ${totalPrice}</h5>
        <h5>Shipping Charge: ${totalShipping}</h5>
        <h5>Tax: ${tax.toFixed(2)}</h5>
        <h3 className="grd-total">Grand Total: ${grandTotal}</h3>
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
