import React, {useEffect, useState} from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import LayoutHeading from "../../../layout/components/LayoutHeading";
import SearchContact from "../../components/search-contact/SearchContact";
import {IContact} from "../../models/IContact";
import {ContactService} from "../../services/ContactService";
import Spinner from "../../../ui/components/Spinner";
import AdminCard from "../../components/admin-card/AdminCard";

interface IState{
    loading: boolean;
    contacts : IContact[];
    filteredContacts : IContact[];
    errorMessage : string;
}

const AdminContact:React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const [state, setState] = useState<IState>({
        loading : false,
        contacts : [] as IContact[],
        filteredContacts : [] as IContact[],
        errorMessage : ""
    });

    const filterTheContacts = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setSearchQuery(event.target.value);
        const filteredContacts:IContact[] = state.contacts.filter(contact => contact.name.toLowerCase().trim().includes(event.target.value.toLowerCase().trim()));
        setState({...state, filteredContacts : filteredContacts});
    };

    useEffect(() => {
        getAllContactsFromServer();
    }, [])

    const getAllContactsFromServer = ():void => {
        setState({...state, loading : true});
        ContactService.getAllContacts().then((response) => {
            setState({
                ...state,
                loading : false,
                contacts : response.data,
                filteredContacts : response.data
            })
        }).catch((error) => {
            setState({
                ...state,
                loading : false,
                errorMessage : error.message
            })
        });
    };

    const deleteContactFromServer = (contactId:string):void => {
        ContactService.deleteContact(contactId).then((response) => {
            if(response && response.data){
                getAllContactsFromServer();
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    const {loading ,contacts,errorMessage, filteredContacts} = state;
    return (
        <>
            {loading && <Spinner/>}
            <NavBar/>
            <LayoutHeading heading={'Contact Manager'} color={'text-dark'}/>
            <SearchContact searchQuery={searchQuery} filterTheContacts={filterTheContacts}/>
            {
                !loading && filteredContacts.length > 0 ? <>
                    <div className="container">
                        <div className="row">
                            {
                                filteredContacts.map(contact => {
                                    return (
                                        <div className="col-sm-6 mt-3" key={contact.id}>
                                                <AdminCard deleteContactFromServer={deleteContactFromServer} contact={contact}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </> : <>

                </>
            }

        </>
    );
}
export default AdminContact;
