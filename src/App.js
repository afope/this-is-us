import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

import logo from './logo.svg';
import './App.css';

// - components
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Home from './components/Home';
import Modal from './components/Modal';
import About from './components/About';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '[Insert URI of GraphQL endpoint]'
});

function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route component={Default} />
      </Switch>
      <Footer />
      <Modal />
    </Fragment>
  );
}

export default App;
