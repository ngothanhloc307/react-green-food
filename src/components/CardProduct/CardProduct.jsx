import React from 'react';
import './card_product.css';
import { Link } from 'react-router-dom';
import Stars from '../Stars/Stars';

const CardProduct = ({ product }) => {
  return (
    <div className='card'>
      <div className='card-container'>
        <img src={product.imgUrl[0]} alt='produdct-img' />
        <Link to={`products/${product.id}`} className='link'>
          <i className='ri-eye-line'></i>
        </Link>
      </div>
      <footer className='card-footer'>
        <h5>{product.title}</h5>
        <p>${product.price}</p>
      </footer>
      <div className='cart'>
        <Stars rating={product.rating} className='star' />
        <button className='btn btn-cart'>Add to cart</button>
      </div>
    </div>
  );
};

export default CardProduct;
