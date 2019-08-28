import React, { Component } from 'react';
import { fetchProducts } from './utils/api';
import {isEmpty} from './utils/index';

// - data

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    cart: [],
    navOpen: false,
    modalOpen: false,
    modalProduct: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    product: {},
  };

  componentDidMount() {
    this.handleFetch();
  }

  componentDidUpdate() {
    // should probably pull this from storage instead of making another api call
    if (this.state.products === undefined) {
      this.handleFetch();
    }
  }

  handleFetch = () => {
    fetchProducts()
      .then((products) => this.setProducts(products))
      .catch(e => console.log(e))
  }

  setProducts = (products) => {
    this.setState({
        products,
    })
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);

    this.setState(() => {
      return { detailProduct: product };
    });
  };

  handleAddItemToCart = (cart, newCartItem) => {
     let itemInCart = cart.find((item) => {
       if (item.id === newCartItem.id) {
         return item;
       }
     });
      // this means the item is in the cart already
      // now we modify the item count in the cart and return that
     if (!isEmpty(itemInCart)) {
        return cart.map((item) => {
          if (cart.id === newCartItem) {
            return {...item, count: item.count + 1}
          } else {
            return item;
          }
        })
     }
     return [...cart, newCartItem];
  }


  addToCart = (id, price) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.cart = 1;
    product.price = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: this.handleAddItemToCart(this.state.cart,product) };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
    document.querySelector('body').classList.toggle('modal--open');
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
    document.querySelector('body').classList.toggle('modal--open');
  };

  toggleNav = () => {
    this.setState(prevProps => ({ navOpen: !prevProps.navOpen }));
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (!product.count) {
      product.count = 1;
    }
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {

    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if(!product.count) {
      product.count = 1;
    }
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        this.setProducts();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          toggleNav: this.toggleNav,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
