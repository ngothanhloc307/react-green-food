import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Sort from '../../components/Sort/Sort';
import './products.css';
import { products } from '../../assets/fake-data/products-data';
import List_Products from '../../components/List_Products/List_Products';
import Filter from '../../components/Filter/Filter';
import GridProducts from '../../components/GridProducts/GridProducts';
import { useFilterContext } from '../../context/filter_context';

const Products = () => {
  const { grid_view } = useFilterContext();
  return (
    <main>
      <Breadcrumb title='products' />
      <div className='products'>
        <div className='products-list'>
          <Sort />
          {grid_view ? <GridProducts /> : <List_Products />}
        </div>
        <div className='category'>
          <Filter />
        </div>
      </div>
    </main>
  );
};

export default Products;
