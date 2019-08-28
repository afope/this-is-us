import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactContactForm from 'react-mail-form';


export default class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <h1>Get in touch</h1>
        <p>Some random text about getting in touch</p>
        <br />
        <p>Email: info@thisisus.ng</p>
        <p>Phone: +234 891 5567</p>
        <ReactContactForm className="contact_form" titlePlaceholder="Email" contentsPlaceholder="Message" to="info@thisisus.ng" buttonText="Submit" />
      </section>
    );
  }
}
