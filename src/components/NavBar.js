import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// - components
import logo from '../logo-two.jpg';
import { ButtonContainer } from './Button';

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="nav__container">
        <section className="nav">
          <ul>
            <li>
              <Link to="/" className="nav__link">
                Home <span> &#8226;</span>
              </Link>
              <Link to="/shop" className="nav__link">
                Shop <span> &#8226;</span>
              </Link>
              <Link to="/about" className="nav__link">
                About <span> &#8226;</span>
              </Link>
            </li>
          </ul>
          <Link to="/cart">
            <ButtonContainer className="cart-button__container">
              <i className="fas fa-shopping-cart" />
            </ButtonContainer>{' '}
          </Link>
        </section>
        <Link to="/">
          <img src={logo} alt="website logo" className="logo justify-start" />
        </Link>{' '}
        <i class="fas fa-chevron-down fa-sm" />
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  a {
    color: var(--mainWhite);
    font-size: 1rem;
  }
`;
