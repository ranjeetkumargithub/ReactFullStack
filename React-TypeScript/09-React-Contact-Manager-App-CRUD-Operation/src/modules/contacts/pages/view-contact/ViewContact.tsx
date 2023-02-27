import React, {useEffect, useState} from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import LayoutHeading from "../../../layout/components/LayoutHeading";
import {Link, useParams} from "react-router-dom";
import {ContactService} from "../../services/ContactService";
import {IContact} from "../../models/IContact";
import Spinner from "../../../ui/components/Spinner";
import {IGroup} from "../../models/IGroup";

interface IState{
    loading : boolean;
    contact : IContact;
    errorMessage : string;
}

const ViewContact:React.FC = () => {
    const {contactId} = useParams(); // get contact id from URL

    const [state, setState] = useState<IState>({
        loading : false,
        contact : {} as IContact,
        errorMessage : ""
    });

    const [group, setGroup] = useState<IGroup>({} as IGroup);

    useEffect(() => {
        if(contactId) {
            getContactInfoFromServer(contactId);
        }
    }, [contactId]);

    const getContactInfoFromServer = (contactId:string) => {
        setState({...state, loading : true});
        ContactService.getContact(contactId).then((response) => {
            setState({
                ...state,
                loading: false,
                contact : response.data
            });
            getGroupFromServer(response.data);
        }).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage : error.message
            });
        });
    };

    const getGroupFromServer = (contact:IContact) => {
        ContactService.getGroup(contact).then((response) => {
            setGroup(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const {loading, contact, errorMessage} = state;
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
