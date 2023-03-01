import React, {useEffect, useState} from 'react';
import NavBar from "../../../layout/pages/navbar/NavBar";
import LayoutHeading from "../../../layout/components/LayoutHeading";
import SearchContact from "../../components/search-contact/SearchContact";
import {IContactView} from "../../models/IContactView";
import Spinner from "../../../ui/components/Spinner";
import AdminCard from "../../components/admin-card/AdminCard";
import * as contactActions from "../../../../redux/contacts/contacts.actions";
import * as contactReducer from "../../../../redux/contacts/contacts.reducer";
import {AppDispatch, RootState, useAppDispatch} from "../../../../redux/store";
import {useSelector} from "react-redux";
import NoContactsFound from "../../../ui/components/NoContactsFound";

interface IState {
    loading: boolean;
    contacts: IContactView[];
    filteredContacts: IContactView[];
    errorMessage: string;
}

const AdminContact: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const [searchQuery, setSearchQuery] = useState<string>("");

    // get data from Redux Store
    const contactState: contactReducer.InitialState = useSelector((state: RootState) => {
        return state[contactReducer.contactFeatureKey];
    });

    const filterTheContacts = (event: React.ChangeEvent<HTMLInputElement>): void => {
        /*setSearchQuery(event.target.value);
        const filteredContacts:IContactView[] = state.contacts.filter(contact => contact.name.toLowerCase().trim().includes(event.target.value.toLowerCase().trim()));
        setState({...state, filteredContacts : filteredContacts});*/
    };

    useEffect(() => {
        getAllContactsFromServer();
    }, [])

    const getAllContactsFromServer = (): void => {
        // dispatch an action
        dispatch(contactActions.getAllContactsAction());
    };

    const deleteContactFromServer = (contactId: string | undefined): void => {
        dispatch(contactActions.deleteContactAction({contactId: contactId})).then((response: any) => {
            if (response && !response.error) {
                getAllContactsFromServer();
            }
        });
    };

    const {loading, contacts,} = contactState;
    return (
        <>
            {loading && <Spinner/>}
            <NavBar/>
            <LayoutHeading heading={'Contact Manager'} color={'text-dark'}/>
            <SearchContact searchQuery={searchQuery} filterTheContacts={filterTheContacts}/>
            {
                !loading && contacts.length > 0 ? <>
                    <div className="container">
                        <div className="row">
                            {
                                contacts.map(contact => {
                                    return (
                                        <div className="col-sm-6 mt-3" key={contact._id}>
                                            <AdminCard deleteContactFromServer={deleteContactFromServer}
                                                       contact={contact}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </> : <>
                    <NoContactsFound/>
                </>
            }
        </>
    );
}
export default AdminContact;
