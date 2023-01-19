import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import './sort.css';

const Sort = () => {
  const btnClick = () => {
    console.log('sdfd');
  };
  const {
    filtered_products: all_products,
    grid_view,
    sort,
    updateSort,
    setGirdView,
    setListView,
  } = useFilterContext();

  return (
    <div className='sort'>
      <div className='btn-container'>
        <div className='btn-group'>
          <button
            type='button'
            className={`${grid_view ? 'btn btn-grid active' : 'btn btn-grid'}`}
            onClick={setGirdView}
          >
            <i className='ri-layout-grid-fill'></i>
          </button>
          <button
            type='button'
            className={`${!grid_view ? 'btn btn-list active' : 'btn btn-list'}`}
            onClick={setListView}
          >
            <i className='ri-list-check'></i>
          </button>
        </div>
        <p>{all_products.length} products found</p>
        <hr />
        <div className='sort-container'>
          <form className='sort-wrap'>
            <i className='ri-sort-desc'></i>
            <label htmlFor='sort'>Sort by</label>
            <select
              name='sort'
              id='sort'
              className='sort-select'
              value={sort}
              onChange={updateSort}
            >
              <option value='price-lowest'>Price: Low to High</option>
              <option value='price-heights'>Price: High to Low</option>
              <option value='name-a'>name (a-z)</option>
              <option value='name-z'>name (z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sort;
