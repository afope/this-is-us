import React, { Component } from 'react';
import CartItem from './CartItem';

export default class CartList extends Component {
  render() {
    const { value } = this.props;
    const { cart } = value;

    return (
      <div className="container-fluid">
        {cart.map(item => {
          return <CartItem key={item.id} value={value} item={item} />;
        })}
      </div>
    );
  }
}
