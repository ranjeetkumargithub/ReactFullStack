import React from 'react';
import NotFoundImg from "../assets/img/NotFound.gif";

const NotFound:React.FC = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <small className="fw-bold text-danger">Page not found</small>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NotFound;
