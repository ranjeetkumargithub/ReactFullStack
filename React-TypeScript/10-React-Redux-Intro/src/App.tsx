import React from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import CounterRedux from "./components/CounterRedux";
import EmployeesRedux from './components/EmployeesRedux';
import UserListRedux from './components/UserListRedux';


function App() {

    return (
        <React.Fragment>

            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Navigate to={'/counter'}/>}/>
                    <Route path="/counter" element={<CounterRedux/>}/>
                    <Route path="/employees" element={<EmployeesRedux/>}/>
                    <Route path="/users" element={<UserListRedux/>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
