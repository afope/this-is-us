import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <h1>error</h1>
        <h2>page not found</h2>
        <h3>
          the requested URL{' '}
          <span className="text-danger">{this.props.location.pathname}</span>{' '}
          was not found
        </h3>
      </div>
    );
  }
}
