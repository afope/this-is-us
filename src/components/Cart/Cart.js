import React, { Fragment, Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';

export default class Cart extends Component {

  // with this function we can manipulate/normalize the cart data
  modifyCart = (cart) => {
    return cart.map((cartItem) => {
      if(!cartItem.count) {
        return {
          ...cartItem,
          count: 1,
        }
      } else  {
        return cartItem;
      }
    })
  }


  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            let modifiedCart = this.modifyCart(cart);
            let modifiedValue = {
              ...value,
              cart: modifiedCart
            }

            if (cart.length) {
              return (
                <Fragment>
                  <Title name="Your" title="cart" />
                  <CartColumns />
                  <CartList value={modifiedValue} />
                  <CartTotals value={modifiedValue} />
                </Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
