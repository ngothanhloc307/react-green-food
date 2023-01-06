import React from 'react';
import './banner.css';
import banner_footer from '../../assets/images/main/banner-1.png';
import bgBanner from '../../assets/images/main/bg-banner-1.png';

const Banner = () => {
  return (
    <div className='banner'>
      <img src={bgBanner} alt='banner' />
      <div className='banner-body'>
        <div className='banner-header'>
          <h2>Stay home & get your daily needs from our shop</h2>
          <p>
            Start You'r Daily Shopping with <span style={{ color: 'green' }}> Green Food</span>
          </p>
        </div>
        <div className='banner-img'>
          <img src={banner_footer} alt='banner-img' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
