import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import * as userAction from "../redux/users/user.action";
import * as userReducer from "../redux/users/user.reducer";



let UserListRedux: React.FC = ({}) => {

    const dispatch:AppDispatch = useAppDispatch();

    // get data from redux store
    const userState:userReducer.InitialState = useSelector((state:RootState) => {
        return state[userReducer.userFeatureKey];
    });

    const {loading, errorMessage, users} = userState;
    
    useEffect(() => {
        dispatch(userAction.getAllUsersAction());
    }, []);

    return (
        <React.Fragment>
            <div className="grid">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success">User List</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                                autem, consequatur culpa, est explicabo facilis fuga, harum incidunt inventore nihil
                                porro quis ratione reprehenderit tempore voluptates? Accusantium delectus porro
                                quae?</p>
                        </div>
                    </div>

                    {
                        loading && <Spinner/>
                    }

                    {
                        errorMessage && Object.keys(errorMessage).length > 0 &&
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-danger text-center">{JSON.stringify(errorMessage)}</p>
                            </div>
                        </div>
                    }

                    {
                        !loading && users.length > 0 &&

                        <div className="row">
                            <div className="col">
                                <table className="table table-hover text-center table-striped">
                                    <thead className='bg-success text-white'>
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Street</th>
                                        <th>City</th>
                                        <th>Company</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        users.map(user => {
                                            return (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.street}</td>
                                                    <td>{user.address.city}</td>
                                                    <td>{user.company.name}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
};
export default UserListRedux;