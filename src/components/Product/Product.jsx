import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const { category, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;