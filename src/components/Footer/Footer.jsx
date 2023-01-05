import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/main/logo.png';

const footerQuickLinks = [
  {
    display: 'Term & Conditions',
    url: '#',
  },
  {
    display: 'Privacy Policy',
    url: '#',
  },
  {
    display: 'Return & Refund',
    url: '#',
  },
  {
    display: 'Payment Method',
    url: '#',
  },
];

const footerLinks = [
  {
    display: 'Home Page',
    url: '/',
  },
  {
    display: 'Product',
    url: '/product',
  },
  {
    display: 'About Us',
    url: '/about',
  },
  {
    display: 'Cart',
    url: '#',
  },
];

const contact = [
  {
    display: 'Address',
    title: 'HoChiMinh City, Viet Nam',
    icon: 'ri-map-pin-fill',
    url: '#',
  },
  {
    display: 'Phone Call',
    title: '012345454',
    icon: 'ri-phone-fill',
    url: '#',
  },
  {
    display: 'Facebook',
    title: 'ngoloc307',
    icon: 'ri-facebook-fill',
    url: 'https://www.facebook.com/',
  },
  {
    display: 'Email',
    title: 'ngothanhloc307@gmail.com',
    icon: 'ri-mail-line',
    url: 'https://www.google.com/',
  },
];
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='logo_img'>
          <Link to='/'>
            <img src={Logo} alt='logo' className='footer-logo' />
          </Link>
        </div>

        <div className='links-title'>
          <ul className='links-title'>
            <h2 className='title'>Info Link</h2>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='quick-link'>
          <ul className='quick-link'>
            <h2 className='title'>Quick Link</h2>
            {footerQuickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='footer-contact'>
          <ul>
            <h2 className='title'>Contact Me</h2>
            {contact.map((item, index) => (
              <li key={index} className='contact-item'>
                <span>
                  <a href={item.url}>
                    <i className={`${item.icon}`}></i>
                  </a>
                  {'   '}
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
