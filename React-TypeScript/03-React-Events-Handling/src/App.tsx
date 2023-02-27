import React from 'react';
import WatchCart from './components/product-cart/components/WatchCart';
// import Counter from './components/counter/Counter';
// import ProductItem from './components/product/ProductItem';
import Navbar from './layout/Navbar';

const App:React.FC = () => {
  return (
      <>
        <Navbar heading={"React Events Handling"}/>
        {/* <Counter/> */}
        {/* <ProductItem/> */}
        <WatchCart/>
      </>
    
  );
}

export default App;
