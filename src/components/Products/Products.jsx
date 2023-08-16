// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div className='products-details'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="shopping-cart-container">
                <h2>Hello From shopping container</h2>
            </div>
        </div>
    );
};

export default Products;