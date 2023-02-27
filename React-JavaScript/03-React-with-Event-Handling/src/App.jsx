import React from 'react';
import './App.css';
import ProductCart from './components/product-cart/ProductCart';
// import ProductItem from './components/product/ProductItem';
// import Counter from './components/counter/Counter';

import Navbar from './layout/Navbar';

const App = () => {
  return (
    <>
      <Navbar heading={"React with Events Handling"}/>

      {/* <Counter/> */}

      {/* <ProductItem/> */}

      <ProductCart/>
      
    </>
    
  );
}

export default App;
