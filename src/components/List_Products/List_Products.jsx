import React from 'react';
import './list_product.css';
import { useFilterContext } from '../../context/filter_context';
import CardProduct from '../CardProduct/CardProduct';
import { formatPrice } from '../../utils/constain';
import { Link } from 'react-router-dom';

const List_Products = () => {
  const { filtered_products: products } = useFilterContext();

  return (
    <div className='list-container'>
      <div className='list-product'>
        {products.map((product) => (
          <article key={product.id} className='list-single'>
            <img src={product.images[0].url} alt='produdct-img' />
            <div className='list-single__content'>
              <p className='card-title'>{product.title}</p>
              <p className='price'>${product.price}</p>
              <p>{product.description.substring(0, 150)}...</p>
              <Link to={`/product/${product.id}`} className='btn list-detail-btn'>
                Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default List_Products;
