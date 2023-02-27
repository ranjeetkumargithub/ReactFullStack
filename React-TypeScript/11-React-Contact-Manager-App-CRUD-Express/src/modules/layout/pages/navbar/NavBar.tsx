import React from 'react';
import {Link} from 'react-router-dom';

interface IProps{
    color? : string;
}

const NavBar:React.FC<IProps> = (props) => {
    return(
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
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts/admin" className="nav-link">Contacts</Link>
                            </li>
                        </ul>
                        <div className="d-flex ms-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/users/login" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-link"><i className="bi bi-power"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};
export default NavBar;