import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// - components
import logo from '../logo-two.jpg';
import { ButtonContainer } from './Button';

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link>Contact Us</Link>
        <Link className="footer__copyright">
          Copyright 2019 This is Us Nigeria ltd
        </Link>
        <Link>Privacy policy</Link>
      </section>
    );
  }
}
