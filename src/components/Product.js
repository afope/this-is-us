import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price} = this.props.product;

    return (
      <ProductWrapper>
        <div className="product__container">
          <div className="product__image-container" onClick={console.log('you clicked me on the product container')}>
          <Link to= "/details" />
          <img src={img} className="product__image" alt="product"/>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`

`
