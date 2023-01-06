import React from 'react';
import './recommend.css';
import { products } from '../../assets/fake-data/products-data';
import CardProduct from '../CardProduct/CardProduct';
import { Link } from 'react-router-dom';

const Recommend = () => {
  return (
    <div className='recommended'>
      <div className='recommended-header'>
        <div className='title'>Recommended</div>
        <Link to='/products'>
          <p>
            View All <i className='ri-arrow-right-s-line'></i>
          </p>
        </Link>
      </div>
      <div className='recommend-products'>
        {products.slice(0, 3).map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Recommend;
