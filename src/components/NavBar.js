import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// - components
import logo from '../Logo.svg';
import { ButtonContainer } from './Button';

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <ProductConsumer>
          {(value) => { return (
            <section className="nav">
              <i class="fas fa-bars" onClick={() => {
                    value.toggleNav();
                  }}></i>
                <Link to="/">
                  <img src={logo} alt="website logo" className="logo justify-start" />
                </Link>{' '}

                          <Link to="/cart">
                            <ButtonContainer className="cart-button__container">
                              <i className="fas fa-shopping-cart" />
                            </ButtonContainer>{' '}
                          </Link>
            </section>
          )

          }}
        </ProductConsumer>

      </header>

    );
  }
}
