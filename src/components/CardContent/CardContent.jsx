import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import { formatPrice } from '../../utils/constain';
import CartItem from '../CartItem/CartItem';
import './cart_content.css';

const CardContent = () => {
  const { cart, clearCart, total_amount } = useCartContext();

  return (
    <div className='cart-context'>
      <div className='cart-column'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className='card-clear'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button type='button' className='link-btn clear-btn' onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <div className='cart-footer'>
        <article>
          <h5>
            subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>

          <hr />
          <h4>
            order total: <span>{formatPrice(total_amount)}</span>
          </h4>
        </article>
        <Link to='/checkout' className='btn'>
          proceed to checkout
        </Link>
      </div>
    </div>
  );
};

export default CardContent;
