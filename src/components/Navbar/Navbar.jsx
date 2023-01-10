import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/main/logo.png';
import { useProductsContext } from '../../context/products_context';
import { useFilterContext } from '../../context/filter_context';

const links = [
  { title: 'Home', url: '/', icon: 'ri-home-line' },
  { title: 'About', url: '/about', icon: 'ri-map-pin-line' },
  { title: 'Products', url: '/products', icon: 'ri-store-line' },
  { title: 'Cart', url: '/cart', icon: 'ri-shopping-cart-line' },
];

export const Navbar = () => {
  const { updateFilters } = useFilterContext();
  const { openSidebar } = useProductsContext();

  return (
    <div className='nav'>
      <div className='main'>
        <header className='header'>
          <div className='nav-center'>
            <div className='nav-header'>
              <Link to='/'>
                <img src={Logo} alt='logo' className='logo' />
              </Link>
            </div>

            <form className='form-control'>
              <span>
                <i className='ri-search-line'></i>
              </span>
              <input
                type='text'
                placeholder='Search item...'
                className='search-input'
                name='text'
              />
            </form>

            <div className='nav-links'>
              <ul className='nav-links'>
                {links.map((link, i) => (
                  <li key={i}>
                    <i className={`${link.icon} icon`}></i>
                    <Link to={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav-toggle'>
              <button type='button' className='nav-toggle' onClick={openSidebar}>
                <span>
                  <i className='ri-menu-fill'></i>
                </span>
              </button>
            </div>
          </div>
        </header>
        <hr />
      </div>
    </div>
  );
};
