import React from 'react';
import './hero_slider.css';
import Slider from 'react-slick';
import { sliders } from '../../assets/fake-data/products-data';

const HeroSlider = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className='section'>
      <div className='slider'>
        <Slider {...settings}>
          {sliders.map((slider) => (
            <div className='single-slider' key={slider.id}>
              <div className='slider-body'>
                <img
                  src={slider.bgSlider}
                  alt='BgSlider'
                  className='bg-slider'
                  style={{ backgroundColor: `${slider.color}` }}
                />
                <div className='slider-main'>
                  <div className='slider-content'>
                    <h1>{slider.title}</h1>
                    <p>{slider.desc}</p>
                    <form className='contact-form'>
                      <input
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter email'
                      />
                      <button type='submit' className='submit-btn'>
                        Subscrible
                      </button>
                    </form>
                  </div>
                  <div className='slider_img'>
                    <img src={slider.imgUrl} alt='slider_img' className='slider-img' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
