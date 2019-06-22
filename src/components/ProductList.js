import React, { Component, Fragment } from 'react'

// - components
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {

  render() {
    return (
      <Fragment>
        <section className="products__container">
          <ProductConsumer>
            {(value) => {
              return value.products.map( product => {
                return <Product product={product} key={product.id} />
              })
            }}
          </ProductConsumer>
        </section>

      </Fragment>
    )
  }
}
