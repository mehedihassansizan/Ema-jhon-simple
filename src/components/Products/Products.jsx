/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';



const Products = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (product) =>{
        // console.log(product);
        const newCart = [...carts, product];
        setCart(newCart);
    }
    return (
        <div className='products-details'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        addToCart={addToCart}>
                    </Product>)
                }
            </div>
            <div className="shopping-cart-container">
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Products;