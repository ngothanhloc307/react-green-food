import React, { useContext, useEffect, useReducer } from 'react';
import { products } from '../assets/fake-data/products-data.js';
import reducer from '../reducers/products_reducer.js';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../utils/actions';
import { type } from '@testing-library/user-event/dist/type/index.js';

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  product_all: [],
  single_products_loading: false,
  single_products_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = () => {
    const product_all = products;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
