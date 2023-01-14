import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { products } from '../../assets/fake-data/products-data';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './single_product.css';
import ProductImage from '../../components/ProductImage/ProductImage';
import Stars from '../../components/Stars/Stars';
import { formatPrice } from '../../utils/constain';
import AddToCart from '../../components/AddToCart/AddToCart';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tempProduct = products.filter((item) => {
    return item.id === id;
  });

  const product = tempProduct[0];
  const { title, rating, category, price, images, description, stock } = product;

  useEffect(() => {}, [product]);

  return (
    <main>
      <Breadcrumb title={product.title} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn btn-back'>
          Back To Product
        </Link>
        <div className='product-center'>
          <ProductImage images={images} />
          <div className='product-content'>
            <h2>{title}</h2>
            <span>
              <Stars rating={rating} className='star' />
            </span>
            <p className='price'>{formatPrice(price)}</p>
            <p>{description}</p>
            <span>
              <b>Category: </b>
              {category}
            </span>
            <span>
              <b>Stock: </b>
              {stock > 0 && <AddToCart />}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
