import React, {useEffect, useState} from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import LayoutHeading from "../../../layout/components/LayoutHeading";
import {Link, useNavigate} from "react-router-dom";
import {IUserView} from "../../models/IUserView";
import {AppDispatch, useAppDispatch} from "../../../../redux/store";
import * as userActions from "../../../../redux/users/user.actions";

interface IUserError {
    nameError: string;
    emailError: string;
    passwordError: string;
}

const RegisterUser: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState<IUserView>({
        email: "",
        password: "",
        username: ""
    });

    let [userError, setUserError] = useState<IUserError>({
        nameError: '',
        emailError: '',
        passwordError: ''
    });

    let validateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, username: event.target.value});
        let regExp = /^[a-zA-Z0-9]{4,10}$/;
        !regExp.test(event.target.value) ?
            setUserError({...userError, nameError: 'Enter a proper Username'})
            : setUserError({...userError, nameError: ''});
    }

    let validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, email: event.target.value});
        let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        !regExp.test(event.target.value) ?
            setUserError({...userError, emailError: 'Enter a proper Email'})
            : setUserError({...userError, emailError: ''});
    }

    let validatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, password: event.target.value});
        let regExp = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,15}$/;
        !regExp.test(event.target.value) ?
            setUserError({...userError, passwordError: 'Enter a proper Password'})
            : setUserError({...userError, passwordError: ''});
    }

    const checkForEmptyFields = (): boolean => {
        for (let key of Object.keys(user) as (keyof typeof user)[]) {
            if (user[key] === "") {
                return true;
            }
        }
        return false;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(userActions.registerUserAction({user: user})).then((response: any) => {
            if (response && !response.error) {
                navigate('/users/login');
            }
        });
    };

    return (
        <>
            <NavBar/>
            <LayoutHeading heading={'Register User'} color={'text-primary'}/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <form onSubmit={e => handleSubmit(e)}>
                            <div className="mb-2">
                                <input
                                    required={true}
                                    value={user.username}
                                    onChange={e => validateUsername(e)}
                                    type="text"
                                    className={`form-control ${userError.nameError.length > 0 ? 'is-invalid' : ''}`}
                                    placeholder={'Username'}/>
                                {
                                    userError.nameError.length > 0 &&
                                    <small className="text-danger">{userError.nameError}</small>
                                }
                            </div>
                            <div className="mb-2">
                                <input
                                    required={true}
                                    value={user.email}
                                    name={'email'}
                                    onChange={e => validateEmail(e)}
                                    type="email"
                                    className={`form-control ${userError.emailError.length > 0 ? 'is-invalid' : ''}`}
                                    placeholder={'Email'}/>
                                {
                                    userError.emailError.length > 0 &&
                                    <small className="text-danger">{userError.emailError}</small>
                                }
                            </div>
                            <div className="mb-2">
                                <input
                                    required={true}
                                    value={user.password}
                                    name={'password'}
                                    onChange={e => validatePassword(e)}
                                    type="password"
                                    className={`form-control ${userError.passwordError.length > 0 ? 'is-invalid' : ''}`}
                                    placeholder={'Password'}/>
                                {
                                    userError.passwordError.length > 0 &&
                                    <small className="text-danger">{userError.passwordError}</small>
                                }
                            </div>
                            <div className="mb-2">
                                <input disabled={checkForEmptyFields()} type="submit" className="btn btn-primary"
                                       value={'Register'}/>
                                <Link to={'/'} className="btn btn-dark ms-2">Cancel</Link>
                            </div>
                        </form>
                        <small>Already have an account ?
                            <Link to={'/users/login'}
                                  className="fw-bold text-primary text-decoration-none"> Login</Link>
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
}
export default RegisterUser;
