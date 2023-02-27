import React, { useState } from 'react';
import UserList from './components/pages/UserList';
import Navbar from './layout/Navbar';


const App:React.FC = () => {

  return (
      <>
        <Navbar heading={"React useEffect() "}/>

        <UserList/>

      </>
    
  );
}

export default App;
