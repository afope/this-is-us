import React, { Fragment, Component } from 'react';

export default class CartColumns extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <p>products</p>
        </div>

        <div>
          <p>name of product</p>
        </div>

        <div>
          <p>price</p>
        </div>

        <div>
          <p>quantity</p>
        </div>

        <div>
          <p>remove</p>
        </div>

        <div>
          <p>total</p>
        </div>
      </Fragment>
    );
  }
}
