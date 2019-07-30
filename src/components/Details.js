import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          console.log(value.detailProduct)
          const { id, company, title, img, info, price, inCart } = value.detailProduct;
          return (
            <div>
              <div>
                <h1>
                  { title }
                </h1>
                <h4>
                  made by: <span className="text-uppercase">{company}</span>
                </h4>
                <h4>
                  price: $ <span className="text-uppercase">{price}</span>
                </h4>
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
