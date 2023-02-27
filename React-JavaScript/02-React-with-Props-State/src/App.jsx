import React from 'react';
import './App.css';
// import MyCard from './components/MyCard';
import TourCards from './components/tour-cards/TourCards';
import Navbar from './layout/Navbar';

const App = () => {
  return (
    <>
      <Navbar heading={"React with Props"}/>
      {/* <MyCard heading={"Good Morning"} bgColor={"bg-success"}/>
      <MyCard heading={"Good Afternoon"} bgColor={"bg-danger"}/>
      <MyCard heading={"Good Evening"} bgColor={"bg-primary"}/> */}

      <TourCards/>
    </>
    
  );
}

export default App;
