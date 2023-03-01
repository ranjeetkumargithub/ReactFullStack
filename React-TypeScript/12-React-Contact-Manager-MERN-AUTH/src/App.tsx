import React, {useEffect} from 'react';
import './App.css';
import NavBar from "./modules/layout/pages/navbar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./modules/layout/pages/home/HomePage";
import AboutPage from "./modules/layout/pages/about/AboutPage";
import AdminContact from "./modules/contacts/pages/admin-contact/AdminContact";
import AddContact from "./modules/contacts/pages/add-contact/AddContact";
import EditContact from "./modules/contacts/pages/edit-contact/EditContact";
import ViewContact from "./modules/contacts/pages/view-contact/ViewContact";
import LoginUser from "./modules/users/pages/login-user/LoginUser";
import RegisterUser from "./modules/users/pages/register-user/RegisterUser";
import NotFound from "./modules/ui/pages/not-found/NotFound";
import ToastConfiguration from "./modules/ui/components/ToastConfiguration";
import {TokenUtil} from "./util/TokenUtil";
import {AppDispatch, useAppDispatch} from "./redux/store";
import * as userActions from "./redux/users/user.actions";

const App: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();

    useEffect(() => {
        if (TokenUtil.isLoggedIn()) {
            dispatch(userActions.getUserInfoAction())
        }
    }, [])

    return (
        <div className="App">
            <ToastConfiguration/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}></Route>
                    <Route path={"/about"} element={<AboutPage/>}></Route>
                    <Route path={"/contacts/admin"} element={<AdminContact/>}></Route>
                    <Route path={"/contacts/add"} element={<AddContact/>}></Route>
                    <Route path={"/contacts/edit/:contactId"} element={<EditContact/>}></Route>
                    <Route path={"/contacts/view/:contactId"} element={<ViewContact/>}></Route>
                    <Route path={"/users/login"} element={<LoginUser/>}></Route>
                    <Route path={"/users/register"} element={<RegisterUser/>}></Route>
                    <Route path={"*"} element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
