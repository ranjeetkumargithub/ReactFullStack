import React, {useEffect} from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import LayoutHeading from "../../../layout/components/LayoutHeading";
import {Link, useParams} from "react-router-dom";
import {IContact} from "../../models/IContact";
import Spinner from "../../../ui/components/Spinner";
import { AppDispatch, RootState, useAppDispatch } from '../../../../redux/store';
import * as contactActions from "../../../../redux/contacts/contacts.action";
import * as contactReducer from "../../../../redux/contacts/contacts.reducer";
import { useSelector } from 'react-redux';

interface IState{
    loading : boolean;
    contact : IContact;
    errorMessage : string;
}

const ViewContact:React.FC = () => {
    const dispatch:AppDispatch = useAppDispatch();
    const {contactId} = useParams(); // get contact id from URL

    // get data from redux store
    const contactState:contactReducer.InitialState = useSelector((state:RootState) => {
        return state[contactReducer.contactFeatureKey];
    });

    const {loading, contact, group} = contactState;
    
    useEffect(() => {
        if(contactId) {
            getContactInfoFromServer(contactId);
        }
    }, [contactId]);

    const getContactInfoFromServer = (contactId:string) => {
        dispatch(contactActions.getContactAction({contactId : contactId})).then((response:any) => {
            if(response && !response.error){
                dispatch(contactActions.getGroupAction({contact : contact}))
            }
        });
    };


    return (
        <>
            {loading && <Spinner/>}
            <NavBar/>
            <LayoutHeading heading={'View Contact'} color={'text-warning'}/>
            {
                !loading && contact && Object.keys(contact).length > 0 && group && Object.keys(group).length > 0 &&
                <section className="container mt-3">
                    <div className="row align-items-center">
                        <div className="col-sm-3">
                            <img alt=""
                                 className="img-fluid rounded-circle shadow-lg"
                                 src={contact.imageUrl}/>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : <span className="fw-bold">{contact.name}</span>
                                </li>
                                <li className="list-group-item">
                                    Mobile : <span className="fw-bold">{contact.mobile}</span>
                                </li>
                                <li className="list-group-item">
                                    Email : <span className="fw-bold">{contact.email}</span>
                                </li>
                                <li className="list-group-item">
                                    Company : <span className="fw-bold">{contact.company}</span>
                                </li>
                                <li className="list-group-item">
                                    Title : <span className="fw-bold">{contact.title}</span>
                                </li>
                                <li className="list-group-item">
                                    Group : <span className="fw-bold">{group.name}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <Link className="btn btn-warning mt-2" to="/contacts/admin">
                                <i className="bi bi-arrow-left-circle"></i> Back
                            </Link>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}
export default ViewContact;
