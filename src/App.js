import React from 'react';
import './App.css';

import Products from './components/products';
import Categories from './components/categories';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <div className='App'>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;