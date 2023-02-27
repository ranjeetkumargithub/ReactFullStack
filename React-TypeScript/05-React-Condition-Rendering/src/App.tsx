import React from 'react';
// import AutoUser from './components/AutoUser';
import ProductDisplay from './components/products/components/ProductDisplay';
import Navbar from './layout/Navbar';

const App:React.FC = () => {
  return (
      <>
        <Navbar heading={"React Conditional Rendering"}/>
        {/* <AutoUser/> */}
        <ProductDisplay/>
      </>
    
  );
}

export default App;
