import React from 'react';
import TourCards from './components/tour-cards/TourCards';
import Navbar from './layout/Navbar';

const App:React.FC = () => {
  return (
      <>
        <Navbar heading={"Props && State"}/>
        <TourCards/>
      </>
    
  );
}

export default App;
