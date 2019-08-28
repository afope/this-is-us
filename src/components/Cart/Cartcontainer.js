import React, { Fragment } from 'react'
import CartItem from './CartItem';

const Cartcontainer = (props) => {
    const { value } = props;
    const { cart } = value;

    return (
        <Fragment>
            <h1>{cart.length === 1 ? `${cart.length} Item` : `${cart.length} Items`}</h1>
            <div className="row" style={{margin: '0 auto'}}>
                {cart.map(item =>  <CartItem key={item.id} value={value} cart={item} />)}
            </div>
        </Fragment>
    );
}

export default Cartcontainer;
