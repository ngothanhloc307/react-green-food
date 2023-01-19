import React from 'react';
import { useCartContext } from '../../context/cart_context';
import { formatPrice } from '../../utils/constain';
import AmountButton from '../AmountButton/AmountButton';
import './cart_item.css';

const CartItem = ({ id, image, title, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };
  const decrease = () => {
    toggleAmount(id, 'dec');
  };
  return (
    <div className='cart-item'>
      <div className='title'>
        <img src={image} alt={title} />
        <div>
          <h5 className='name'>{title}</h5>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5>{formatPrice(price)}</h5>
      <AmountButton amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button type='button' className='remove-btn' onClick={() => removeItem(id)}>
        <i className='ri-delete-bin-fill'></i>
      </button>
    </div>
  );
};

export default CartItem;
