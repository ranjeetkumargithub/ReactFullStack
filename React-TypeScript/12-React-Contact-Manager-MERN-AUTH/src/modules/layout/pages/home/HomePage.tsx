import React from 'react';
import {Link} from "react-router-dom";

import {TokenUtil} from "../../../../util/TokenUtil";

const HomePage: React.FC = () => {

    return (
        <>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                        <p className="display-1">Contact Manager App</p>
                        <div>
                            {
                                TokenUtil.isLoggedIn() ?
                                    <Link to={'/contacts/admin'} className="btn btn-success">Contacts Admin</Link> :
                                    <Link to={'/users/login'} className="btn btn-warning ms-2">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;
