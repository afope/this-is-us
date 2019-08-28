import React, { Component, Fragment } from 'react';

export default function CartItem(props) {
  const { id, title, price, total, count } = props.cart;
  const { increment, decrement, removeItem } = props.value;

  return (
    <div className="col-lg-4 col-xs-12" style={{marginTop:'20px'}}>
      <img
        src={props.cart.image.src}
        style={{ width: '15rem', height: '15rem' }}
        alt="product"
      />
      <div>
        <b>{title}</b>
      </div>
      <div>
        <b>{price}</b>
      </div>
      <hr />
      <div>
        <div class="cart__btn_container">
            <div class="fixed">
                <button clasName="btn" onClick={() => decrement(id)}>
                -
                </button>
            </div>
            <div style={{margin:'0 20px 0 20px'}}>
              <span>{count}</span>
            </div>
            <div>
              <button clasName="btn" onClick={() => increment(id)}>
              +
              </button>
            </div>
        </div>
      </div>
      <br/>
      <div className="cart-icon" onClick={() => removeItem(id)}>
        <i className="fas fa-trash" />
      </div>
      <div>
        <p>Total: NGN{total === undefined ? price : total}</p>
      </div>
      <hr />
    </div>
  );
}
