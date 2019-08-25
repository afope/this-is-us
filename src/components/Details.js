import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          console.log('detail product', value.detailProduct)
          const { id, title, img, info, price, inCart } = value.detailProduct;
          return (
            <div>
              <div>
                <div className="details">
                  <img src={img}/>
                </div>
                <h1>
                  { title }
                </h1>
                <p>
                  {info}
                </p>

                <div>
                  <Link to="/shop">
                  <ButtonContainer>
                    Back to Products
                  </ButtonContainer>
                  </Link>

                  <ButtonContainer
                  cart
                  disabled={inCart? true: false}
                  onClick={()=>{
                    value.addToCart(id);
                    value.openModal(id);
                  }}>
                    {inCart ? 'In Cart' : 'Add to Cart'}
                  </ButtonContainer>
                </div>
              </div>

              <div>
                <img src={img} />
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
