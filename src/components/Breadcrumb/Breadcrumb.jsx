import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumb.css';

const Breadcrumb = ({ title, product }) => {
  return (
    <div className='breadcrumb'>
      <h3>
        <Link to='/'>Home</Link>
        {product && <Link to='/products'>/Products</Link>}/{title}
      </h3>
    </div>
  );
};

export default Breadcrumb;
