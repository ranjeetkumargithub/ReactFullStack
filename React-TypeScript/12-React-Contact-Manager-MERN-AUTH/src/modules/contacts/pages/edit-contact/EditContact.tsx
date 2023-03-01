import React, {useEffect, useState} from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import LayoutHeading from "../../../layout/components/LayoutHeading";
import {Link, useNavigate, useParams} from "react-router-dom";
import {IContactView} from "../../models/IContactView";
import Spinner from "../../../ui/components/Spinner";
import * as contactActions from "../../../../redux/contacts/contacts.actions";
import * as contactReducer from "../../../../redux/contacts/contacts.reducer";
import {AppDispatch, RootState, useAppDispatch} from "../../../../redux/store";
import {useSelector} from "react-redux";

const EditContact:React.FC = () => {
    const dispatch:AppDispatch = useAppDispatch();
    const {contactId} = useParams();
    const navigate = useNavigate();

    // get data from Redux Store
    const contactReduxState:contactReducer.InitialState = useSelector((state:RootState) => {
        return state[contactReducer.contactFeatureKey];
    });

    const {loading, contact:contactRedux , groups} = contactReduxState

    const [contact, setContact] = useState<IContactView>({
        id : "",
        name : "",
        imageUrl : "",
        email : "",
        mobile :"",
        company : "",
        title : "",
        groupId : ""
    } as IContactView);

    useEffect(() => {
        getAllGroupsFromServer();
    }, []);

    useEffect(() => {
        if(contactId){
            getContactInfoFromServer(contactId);
        }
    }, [contactId]);

    useEffect(() => {
        if(contactRedux && Object.keys(contactRedux).length > 0){
            setContact({
                _id : contactRedux._id,
                name : contactRedux.name,
                imageUrl : contactRedux.imageUrl,
                email : contactRedux.email,
                mobile : contactRedux.mobile,
                company : contactRedux.company,
                title : contactRedux.title,
                groupId : contactRedux.groupId
            })
        }
    }, [contactRedux])

    const getAllGroupsFromServer = () => {
        dispatch(contactActions.getAllGroupsAction());
    };

    const getContactInfoFromServer = (contactId:string) => {
        dispatch(contactActions.getContactAction({contactId : contactId}));
    };

    const updateInput = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>) => {
        setContact({
            ...contact,
            [event.target.name] : event.target.value
        })
    };

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(contactId){
            dispatch(contactActions.updateContactAction({contact:contact, contactId:contactId})).then((response:any) => {
                if(response && !response.error){
                    navigate("/contacts/admin");
                }
            });
        }
    }

    return (
        <>
            {loading && <Spinner/>}
            <NavBar/>
            <LayoutHeading heading={'Edit Contact'} color={'text-primary'}/>
            {
                !loading && groups && groups.length > 0 &&
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handleSubmit(e)}>
                                <div className="mb-2">
                                    <input
                                        required
                                        value={contact.name}
                                        onChange={e => updateInput(e)}
                                        name={'name'}
                                        type="text" className="form-control" placeholder={'Name'}/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        value={contact.imageUrl}
                                        onChange={e => updateInput(e)}
                                        name={'imageUrl'}
                                        type="text" className="form-control" placeholder={'Image Url'}/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        value={contact.email}
                                        onChange={e => updateInput(e)}
                                        name={'email'}
                                        type="text" className="form-control" placeholder={'Email'}/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        value={contact.mobile}
                                        onChange={e => updateInput(e)}
                                        name={'mobile'}
                                        type="number" className="form-control" placeholder={'Mobile'}/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        value={contact.company}
                                        onChange={e => updateInput(e)}
                                        name={'company'}
                                        type="text" className="form-control" placeholder={'Company'}/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        value={contact.title}
                                        onChange={e => updateInput(e)}
                                        name={'title'}
                                        type="text" className="form-control" placeholder={'Title'}/>
                                </div>
                                <div className="mb-2">
                                    <select
                                        required
                                        value={contact.groupId}
                                        onChange={e => updateInput(e)}
                                        name={'groupId'}
                                        className="form-control">
                                        <option value="">Select a Group</option>
                                        {
                                            groups.map(group => {
                                                return(
                                                    <option key={group._id} value={group._id}>{group.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary" value={'Update'}/>
                                    <Link to={'/contacts/admin'} className="btn btn-dark ms-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-3">
                            <img src={contact.imageUrl} alt="" className="rounded-circle img-fluid"/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default EditContact;
