import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {

    console.log('props', this.props)
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { image, title, price } = value.detailProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <ProductConsumer>
                  {value => (
                    <div className="container modal--open" id="modal">
                    <p><strong>{title}</strong></p>
                      <img alt="product" src={image.src} className="modal__image" />
                      <div className="modal__content">
                      <p> Item added to cart!</p>
                      <div className="modal__buttons">
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
                    </div>
                    </div>
                  )}
                </ProductConsumer>

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
  overflow: hidden;
  width: 100%;
  top: 0;
  lett: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    display: flex;
    padding-bottom: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 1%;
    position: fixed;
    width: 40%;
    height: auto;
    font-weight: lighter;
  }
`;
