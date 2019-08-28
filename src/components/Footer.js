import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mailto from 'react-protected-mailto';

// - components
import logo from '../logo-two.jpg';
import { ButtonContainer } from './Button';

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <Link to="/shop">
          <strong> Shop </strong>{' '}
        </Link>{' '}
        <Link to="/about">
          <strong> About </strong>{' '}
        </Link>{' '}
        <Link to="/contact">
          <strong> Contact Us </strong>{' '}
        </Link>{' '}
        <Link to="/" className="footer__copyright">
          Copyright 2019 This is Us Nigeria ltd{' '}
        </Link>{' '}
        <Link> Privacy policy </Link>{' '}
      </section>
    );
  }
}
