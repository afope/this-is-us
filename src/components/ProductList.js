import React, { Component } from 'react'

// - components
import { ProductConsumer } from '../context';

import Productcontainer from './Shop/Productcontainer';

export default class ProductList extends Component {

  render() {
    return (
        <section className="products__container">
          <ProductConsumer>
            {
              (value) =>
              <Productcontainer
                products={value.products}
              />
            }
          </ProductConsumer>
        </section>
    )
  }
}
