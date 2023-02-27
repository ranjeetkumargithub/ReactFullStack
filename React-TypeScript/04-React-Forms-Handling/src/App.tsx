import React from 'react';
import RegisterUser from './components/RegisterUser';
// import UsernameChange from './components/UsernameChange';
import Navbar from './layout/Navbar';

const App:React.FC = () => {
  return (
      <>
        <Navbar heading={"React Forms Handling"}/>
        {/* <UsernameChange/> */}
        <RegisterUser/>

      </>
    
  );
}

export default App;
