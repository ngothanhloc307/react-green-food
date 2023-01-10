import React from 'react';
import './list_product.css';
import { products } from '../../assets/fake-data/products-data';
import GridProducts from '../GridProducts/GridProducts';

const List_Products = () => {
  return <GridProducts products={products} />;
};

export default List_Products;
