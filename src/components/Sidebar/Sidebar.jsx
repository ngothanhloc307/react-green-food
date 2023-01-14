import React, { useRef, useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/main/logo.png';
import { useProductsContext } from '../../context/products_context';
const links = [
  { title: 'Home', url: '/', icon: 'ri-home-line' },
  { title: 'About', url: '/about', icon: 'ri-map-pin-line' },
  { title: 'Products', url: '/products', icon: 'ri-store-line' },
];

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'} `}>
      <div className='sidebar-header'>
        <img src={Logo} alt='logo' className='sidebar-logo' />
        <button className='close-btn' type='button' onClick={closeSidebar}>
          <span>
            <i className='ri-close-line'></i>
          </span>
        </button>
      </div>

      <div className='links'>
        <ul className='links'>
          {links.map((link, i) => (
            <li key={i} onClick={closeSidebar}>
              <i className={`${link.icon} icon`}></i>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
          <li>
            <span className='cart-container'>
              <span className='cart-value__sidebar'>2</span>
              <i className={`ri-shopping-cart-line icon`}></i>
            </span>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </div>

      <form className='sidebar-form-control'>
        <span>
          <i className='ri-search-line'></i>
        </span>
        <input type='text' placeholder='Search item...' className='search-input' />
      </form>
    </aside>
  );
};

export default Sidebar;
