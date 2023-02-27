import React from 'react';
import {Link} from "react-router-dom";
import {IContact} from "../../models/IContact";

interface IProps{
    contact : IContact;
    deleteContactFromServer :  (contactId:string) => void;
}

const AdminCard:React.FC<IProps> = (props) => {
    const {imageUrl,name, email, mobile, _id} = props.contact;

    const clickDelete = (contactId:string) => {
        props.deleteContactFromServer(contactId);
    };

    return (
        <>
            <div className="card shadow-lg">
                <div className="card-body bg-light rounded-2">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img alt=""
                                 className="img-fluid rounded-circle shadow-lg"
                                 src={imageUrl}/>
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : <span className="fw-bold">{name}</span>
                                </li>
                                <li className="list-group-item">
                                    Mobile : <span className="fw-bold">{mobile}</span>
                                </li>
                                <li className="list-group-item">
                                    Email : <span className="fw-bold">{email}</span>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                            <Link className="btn btn-warning mb-1"
                                  to={`/contacts/view/${_id}`}>
                                <i className="bi bi-eye"></i>
                            </Link>
                            <Link className="btn btn-primary mb-1"
                                  to={`/contacts/edit/${_id}`}>
                                <i className="bi bi-pencil"></i>
                            </Link>
                            <button onClick={() => clickDelete(_id)} className="btn btn-danger mb-1">
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdminCard;
