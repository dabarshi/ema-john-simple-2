import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {category, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;