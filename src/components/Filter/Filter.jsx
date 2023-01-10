import React, { useEffect } from 'react';
import { products } from '../../assets/fake-data/products-data';
import { useFilterContext } from '../../context/filter_context';
import './filter.css';
import { formatPrice } from '../../utils/constain';

const Filter = () => {
  const {
    filters: { text, category, max_price, min_price, price },
    updateFilters,
  } = useFilterContext();
  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    return ['All', ...new Set(unique)];
  };
  const categories = getUniqueValues(products, 'category');

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='container category'>
          <div className='category'>
            <div className='category-header'>
              <h3>Category</h3>
              <hr />
            </div>
            <div className='category-item'>
              <div className='category-single'>
                {categories.map((c, i) => (
                  <button
                    key={i}
                    onClick={updateFilters}
                    name='category'
                    type='button'
                    className={` ${
                      category === c ? 'category-single-1 active1' : 'category-single-1'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Container */}
        <div className='container'>
          <div className='filter'>
            <div className='filter-header'>
              <h3>Filter</h3>
              <hr />
            </div>
            <div className='filter-type'>
              <div className='form-control'>
                <input
                  type='text'
                  name='text'
                  placeholder='search'
                  className='search-input'
                  value={text}
                  onChange={updateFilters}
                />
              </div>
              <div className='form-control type-price'>
                <h5>price</h5>
                <p className='price'>{formatPrice(price)}</p>
                <input
                  type='range'
                  name='price'
                  onChange={updateFilters}
                  min={min_price}
                  max={max_price}
                  value={price}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
