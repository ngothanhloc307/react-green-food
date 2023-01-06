import React from 'react';
import './home.css';
import { HeroSlider } from '../../components';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Recommend from '../../components/Recommend/Recommend';
import Banner from '../../components/Banner/Banner';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FeaturedProducts />
      <Recommend />
      <Banner />
    </>
  );
};

export default Home;
