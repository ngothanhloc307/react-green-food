import React from 'react';
import './card_product.css';
import { Link } from 'react-router-dom';
import Stars from '../Stars/Stars';
import { SingleProduct } from '../../pages';

const CardProduct = ({ product }) => {
  return (
    <div className='card'>
      <div className='card-container'>
        <img src={product.images[0].url} alt='produdct-img' />
        <Link to={`/product/${product.id}`} className='link'>
          <i className='ri-eye-line'></i>
        </Link>
      </div>
      <footer className='card-footer'>
        <p className='category'>{product.category}</p>
        <p className='card-title'>{product.title}</p>
        <p className='price'>${product.price}</p>
        <Stars rating={product.rating} className='star' />
        <button className='btn btn-cart'>Add to cart</button>
      </footer>
    </div>
  );
};

export default CardProduct;
