/* eslint-disable no-unused-vars */

import React from 'react';
import './App.scss';

import Products from './components/products';
import Categories from './components/categories.js';
import Header from './components/header';
import Footer from './components/footer';
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <>
      <CssBaseline>
        <Header />
        <Categories />
        <Products />
        <Footer />
      </CssBaseline>
    </>
  );
}

export default App;