import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container" id="modal">
                  <h5>item added to cart</h5>
                  <img alt="product" />
                  <h5>{title}</h5>
                  <h5>$ {price}</h5>
                  <Link to="/shop">
                    <ButtonContainer onClick={() => closeModal()}>
                      Continue shopping
                    </ButtonContainer>
                  </Link>
                  <Link to="/cart">
                    <ButtonContainer onClick={() => closeModal()}>
                      Go to the cart
                    </ButtonContainer>
                  </Link>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  lett: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
