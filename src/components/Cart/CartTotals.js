import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTotal, cartTax, clearCart } = value;

  return (
    <Fragment>
      <div>
        <Link to="/shop">
          <button
            className="btn btn-outline-danger text-uppercase"
            type="button"
            onClick={() => clearCart()}>
            clear cart
          </button>
        </Link>
        <h5>
          <span> subtotal: </span>
          <strong>$ {cartSubTotal} </strong>
        </h5>

        <h5>
          <span> tax: </span>
          <strong>$ {cartTax} </strong>
        </h5>

        <h5>
          <span> total: </span>
          <strong>$ {cartTotal} </strong>
        </h5>
      </div>
    </Fragment>
  );
}
