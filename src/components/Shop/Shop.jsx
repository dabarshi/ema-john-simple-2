import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return (
        <div className='shop-container'>
            <div className="products-container">
                <p>products are coming here : {products.length}</p>
            </div>
            <div className="cart-container">
                <p>This is cart container</p>
            </div>
        </div>
    );
};

export default Shop;