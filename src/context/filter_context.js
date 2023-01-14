import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import { useProductsContext } from './products_context';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../utils/actions';
import { type } from '@testing-library/user-event/dist/type';

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'All',
    price: 0,
    max_price: 0,
    min_price: 0,
  },
};

const FilterContext = React.createContext();

export const FilterProviver = ({ children }) => {
  const { product_all } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: product_all });
  }, [product_all]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [product_all, state.sort, state.filters]);

  const setGirdView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    console.log('set list view');
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'price') {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, updateFilters, setGirdView, setListView }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
