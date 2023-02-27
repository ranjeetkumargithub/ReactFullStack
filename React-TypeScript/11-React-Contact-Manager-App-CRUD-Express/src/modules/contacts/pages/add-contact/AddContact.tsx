import React, {useEffect, useState} from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import LayoutHeading from "../../../layout/components/LayoutHeading";
import {Link, useNavigate} from "react-router-dom";
import Spinner from "../../../ui/components/Spinner";
import {IContact} from "../../models/IContact";
import { AppDispatch, RootState, useAppDispatch } from '../../../../redux/store';
import * as contactActions from "../../../../redux/contacts/contacts.action";
import * as contactReducer from "../../../../redux/contacts/contacts.reducer";
import { useSelector } from 'react-redux';

const AddContact:React.FC = () => {
    const dispatch:AppDispatch = useAppDispatch();
    const navigate = useNavigate();

    const [contact, setContact] = useState<IContact>({
        name : "",
        imageUrl : "",
        email : "",
        mobile :"",
        company : "",
        title : "",
        groupId : ""
    } as IContact);

    // get data from redux store
    const contactReduxState:contactReducer.InitialState = useSelector((state:RootState) => {
        return state[contactReducer.contactFeatureKey];
    });

    const updateInput = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>) => {
        setContact({
            ...contact,
            [event.target.name] : event.target.value
        })
    };

    useEffect(() => {
        getAllGroupsFromServer();
    }, []);

    const getAllGroupsFromServer = () => {
        dispatch(contactActions.getAllGroupAction())
    };

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(contactActions.createContactAction({contact:contact})).then((response:any) => {
            if(response && !response.error){
                navigate("/contacts/admin");
            }
        });
    }

    const {loading, groups} = contactReduxState;

    return (
        <>
            {loading && <Spinner/>}
            <NavBar/>
            <LayoutHeading heading={'Add Contact'} color={'text-success'}/>
            {
                !loading && groups.length > 0 &&
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
                                                return (
                                                    <option key={group._id} value={group._id}>{group.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value={'Create'}/>
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
export default AddContact;
