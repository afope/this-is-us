import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

import logo from './logo.svg';
import './App.css';

// - components
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Home from './components/Home';



function App() {
  return (
    <Fragment>
      <NavBar />
       <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
      </Switch>
  
    </ Fragment>
  );
}

export default App;