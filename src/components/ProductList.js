import React, { Component } from 'react'

// - components
import Product from './Product';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {

  render() {
    return (
        <section className="products__container">
          <ProductConsumer>
            {(value) => {
              return value.products.map( product => {
                return <Product product={product} key={product.id} />
              })
            }}
          </ProductConsumer>
        </section>
    )
  }
}
