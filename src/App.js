import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// - components
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Home from './components/Home';
import NavModal from './components/NavModal';
import Modal from './components/Modal';
import About from './components/About';
import Sustainability from './components/Sustainability';
import FuntuaProjects from './components/FuntuaProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={ProductList} />
        <Route path="/details/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/sustainability" component={Sustainability} />
        <Route path="/funtua" component={FuntuaProjects} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
      <Footer />
      <Modal />
      <NavModal />
    </Fragment>
  );
}

export default App;
