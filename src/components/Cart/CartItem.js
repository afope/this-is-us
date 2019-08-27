import React, { Component } from 'react';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div>
      <div>
        <img
          src={item.image.src}
          style={{ width: '5rem', height: '5rem' }}
          alt="product"
        />
      </div>

      <div>
        <span>product: {title}</span>
      </div>

      <div>
        <span>price: {price}</span>
      </div>

      <div>
        <span className="btn btn-black" onClick={() => decrement(id)}>
          -
        </span>
        <span className="btn btn-black">{count}</span>
        <span className="btn btn-black" onClick={() => increment(id)}>
          +
        </span>
      </div>
      <div className="cart-icon" onClick={() => removeItem(id)}>
        <i className="fas fa-trash" />
      </div>
      <div>
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}
