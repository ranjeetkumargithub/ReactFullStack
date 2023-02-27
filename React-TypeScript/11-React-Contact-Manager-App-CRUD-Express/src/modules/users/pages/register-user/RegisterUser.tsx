import React from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import LayoutHeading from "../../../layout/components/LayoutHeading";
import {Link} from "react-router-dom";

const RegisterUser:React.FC = () => {
    return (
        <>
            <NavBar/>
            <LayoutHeading heading={'Register User'} color={'text-primary'}/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder={'Username'}/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder={'Email'}/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder={'Password'}/>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-primary" value={'Register'}/>
                                <Link to={'/'} className="btn btn-dark ms-2">Cancel</Link>
                            </div>
                        </form>
                        <small>Already have an account ?
                            <Link to={'/users/login'} className="fw-bold text-primary text-decoration-none"> Login</Link>
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
}
export default RegisterUser;
