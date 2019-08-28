import React, { Component, Fragment } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { fetchProduct } from '../utils/api';
import { isEmpty } from '../utils';

// need to add a default view
// for when the api doesnt return anything
// and when value.detailProduct is empty
export default class Details extends Component {
  state = {
    product: {},
  }

  _isUnmounted = false;

  componentDidMount(){
    fetchProduct(this.props.match.params.id)
      .then((product) => {
        if(!this._isUnmounted) {
          this.setState({product});
        }
      })
      .catch(e => console.log(e))
  }

  componentWillUnmount() {
    this._isUnmounted = true;
  }


  render() {
    const { product } = this.state;
    const { title, body_html, image, id} = product;


    return (
      <ProductConsumer>
        {(value) => {
          if(isEmpty(value.detailProduct)) {
            // this is a mutation though :sad:
            value.detailProduct = this.state.product;
          }

          const { inCart } = value;

          return (
            <div>
              <div className="product__details">
                {isEmpty(product) ? (
                   <p>no image yet</p>
                   // replace this with a proper loading icon
                ) :
                <Fragment>
                  <div className="details">
                    <img src={image.src} className="product__image" />
                  </div>
                  <div className="product__info">
                  <h4>
                    {title}
                  </h4>
                  <p>
                    {body_html}
                  </p>
                  <p>
                    <b>NGN {value.detailProduct && value.detailProduct.variants && value.detailProduct.variants[0].price}</b>
                  </p>
                  <Link to="/shop">
                    <ButtonContainer>
                      Back to Products
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart? true: false}
                    onClick={() => {
                      value.addToCart(id, value.detailProduct.variants[0].price);
                      value.openModal(id);
                    }}>
                    {inCart ? 'In Cart' : 'Add to Cart'}
                  </ButtonContainer>
                </div>
              </Fragment>
              }
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
