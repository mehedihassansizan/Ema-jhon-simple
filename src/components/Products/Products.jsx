/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const getDataFromDb = getShoppingCart();
    const saveCart = [];
    // console.log(getDataFromDb);
    //  step-1: get the id
    for (const id in getDataFromDb) {
      // console.log(id);
      // step-1 : addedProduct
      const addedProduct = products.find((product) => product.id == id);
      // console.log(addedProduct);
      if (addedProduct) {
        const quantity = getDataFromDb[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const addToCart = (product) => {
    // console.log(product);
    // const newCart = [...carts, product];
    let newCart = [];
    const exist = carts.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...carts, product];
    } else {
      exist.quantity += 1;
      const remaining = carts.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  const clearTheCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="products-details">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="shopping-cart-container">
        <Cart clearTheCart={clearTheCart} cart={carts}>
          <Link to='/review'>
            <button className="review-btn">Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Products;
