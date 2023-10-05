/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, clearCartAndReview}) => {
  console.log(product);
  const { img, name, id, price, quantity } = product;
  return (
    <div className="review-item-container">
      <img src={img} alt="" />
      <div className="review-details">
        <h3>{name}</h3>
        <p>
          Price : $<span>{price}</span>
        </p>
        <p className="quantity">
          quantity: <span>{quantity}</span>
        </p>
      </div>
      <button onClick={() => clearCartAndReview(id)} className="delete-btn">
        <FontAwesomeIcon className="icon-delete-btn" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
