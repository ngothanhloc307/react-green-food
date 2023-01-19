import React from 'react';
import { Link } from 'react-router-dom';
import './add_to_cart.css';

const AddToCart = () => {
  return (
    <div className='addToCart-btn'>
      <Link to='/cart' className='btn'>
        add tocart
      </Link>
    </div>
  );
};

export default AddToCart;
