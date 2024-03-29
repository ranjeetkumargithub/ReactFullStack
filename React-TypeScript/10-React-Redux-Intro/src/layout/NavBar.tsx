import React from 'react';
import {Link} from "react-router-dom";

interface IProps {
}

interface IState {
}

let NavBar: React.FC<IProps> = ({}) => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-success navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={"/counter"}>Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/employees"}>Employees</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/users"}>Users</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
};
export default NavBar;