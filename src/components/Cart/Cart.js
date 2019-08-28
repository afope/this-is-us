import React, { Fragment, Component } from 'react';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import Cartcontainer from './Cartcontainer';

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
                  <Cartcontainer value={modifiedValue} />
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
