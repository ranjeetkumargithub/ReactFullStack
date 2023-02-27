import React from 'react';
import UserManager from './components/advanced/components/UserManager';
// import ParentCard from './components/basics/ParentCard';
// import ParentForm from './components/intermediate/ParentForm';
import Navbar from './layout/Navbar';

const App:React.FC = () => {
  return (
      <>
        <Navbar heading={"React component interaction"}/>
        {/* <ParentCard/> */}
        {/* <ParentForm/> */}
        <UserManager/>
      </>
    
  );
}

export default App;
