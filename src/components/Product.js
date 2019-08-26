import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';

export default class Product extends Component {
  render() {
    const { id, title, image, price, img, src, inCart } = this.props.product;
    return (
          <ProductConsumer>
            {value => (
              <div
                className="col-lg-4 col-xs-12"
                onClick={() => value.handleDetail(id)}
              >
                <div className="box">
                  <Link to={`/details/${id}`}>
                    <img src={image.src} style={{ width:'100%', height: '100%',}} className="product__image" alt="product" />
                  </Link>
                </div>
                <div className="card-footer">
                  <Link to={`/details/${id}`}>
                    <p>{title}</p>
                  </Link>
                </div>
              </div>
            )}
          </ProductConsumer>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .card-footer {
    background: rgba(247, 247, 247);
  }
  .img-container {
    position: relative;
    overlow: hidden;
  }
`;
