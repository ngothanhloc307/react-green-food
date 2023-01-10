import React from 'react';
import './grid_products.css';

import CardProduct from '../CardProduct/CardProduct';
import { useFilterContext } from '../../context/filter_context';

const GridProducts = () => {
  const { filtered_products: products } = useFilterContext();

  return (
    <div className='grid-container'>
      <div className='products-container'>
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default GridProducts;
