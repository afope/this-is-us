import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class NavModal extends Component {
  render() {

    console.log('props', this.props)
    return (
      <ProductConsumer>
        {value => {
          const { navOpen } = value;

          if (!navOpen) {
            return null;
          } else {
            return (
              <NavModalContainer>
                <ProductConsumer>
                  {value => (
                    <Fragment>
                    <div className="nav-modal__close">
                <i class="fas fa-times"  onClick={() => {
                      value.toggleNav();
                    }}></i>
                </div>
                <div className="nav__modal" id="modal">
                  <ul className="nav-modal__menu">
                    <li>
                      <Link to="/" className="nav__link"  onClick={() => {
                            value.toggleNav();
                          }}>
                        Home
                      </Link>
                      <Link to="/shop" className="nav__link" onClick={() => {
                            value.toggleNav();
                          }}>
                        Shop
                      </Link>
                      <Link to="/about" className="nav__link"  onClick={() => {
                            value.toggleNav();
                          }}>
                        About
                      </Link>
                      <Link to="/sustainability" className="nav__link"  onClick={() => {
                            value.toggleNav();
                          }}>
                        Sustainability
                      </Link>
                      <Link to="/funtua" className="nav__link"  onClick={() => {
                            value.toggleNav();
                          }}>
                        Funtua projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </Fragment>
                  )}
                </ProductConsumer>

              </NavModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const NavModalContainer = styled.div`
  position: fixed;
  z-index: 50;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  top: 0;
  lett: 0;
  bottom: 0;
  background: var(--navyBlue);
;
`;
