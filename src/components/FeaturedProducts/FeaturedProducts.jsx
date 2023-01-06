import React, { useEffect } from 'react';
import './featured_products.css';
import { products } from '../../assets/fake-data/products-data';
import CardProduct from '../CardProduct/CardProduct';
import Slider from 'react-slick';

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const FeaturedProducts = () => {
  const featured = products.filter((product) => {
    return product.featured === true;
  });
  return (
    <section>
      <div className='title'>Featured Products</div>
      <div className='featured-products'>
        <Slider {...settings}>
          {featured.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
