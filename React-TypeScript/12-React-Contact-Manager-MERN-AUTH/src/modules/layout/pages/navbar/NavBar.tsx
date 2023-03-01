import React from 'react';
import {Link} from 'react-router-dom';
import {TokenUtil} from "../../../../util/TokenUtil";
import {AppDispatch, useAppDispatch} from "../../../../redux/store";
import {logOffAction} from "../../../../redux/users/user.reducer";
import * as userReducer from "../../../../redux/users/user.reducer";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";

interface IProps {
    color?: string;
}

const NavBar: React.FC<IProps> = (props) => {
    const dispatch: AppDispatch = useAppDispatch();

    // get user data from redux store
    const userReduxState: userReducer.InitialState = useSelector((state: RootState) => {
        return state[userReducer.userFeatureKey];
    });

    const {user} = userReduxState;

    const clickLogOff = () => {
        dispatch({
            type: `${logOffAction}`
        })
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <i className="bi bi-phone"></i> Contact <span className="text-warning">Manager</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#ui-navbar" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="ui-navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts/admin" className="nav-link">Contacts</Link>
                            </li>
                        </ul>
                        <div className="d-flex ms-auto">
                            <ul className="navbar-nav">
                                {
                                    !TokenUtil.isLoggedIn() ? <li className="nav-item">
                                        <Link to="/users/login" className="nav-link">Login</Link>
                                    </li> : <>
                                        {
                                            user && Object.keys(user).length > 0 &&
                                            <li className="nav-item">
                                                <Link to="/users/login" className="nav-link">
                                                    <img src={user.imageUrl} width={25} height={25} alt=""
                                                         className="rounded-circle"/>
                                                    {" "}{user.username}</Link>
                                            </li>
                                        }
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link" onClick={clickLogOff}><i
                                                className="bi bi-power"></i></Link>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};
export default NavBar;