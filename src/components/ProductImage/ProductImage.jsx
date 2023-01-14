import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './product_image.css';

const ProductImage = ({ images = [{ url: '' }] }) => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const [main, setMain] = useState(images[0]);

  return (
    <div className='img-section'>
      <img src={main.url} alt='main-img' className='main-image' />
      <div className='gallery'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <img
              src={image.url}
              alt={index}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductImage;
