import {createAsyncThunk} from "@reduxjs/toolkit";
import {IContactView} from "../../modules/contacts/models/IContactView";
import {ContactService} from "../../modules/contacts/services/ContactService";
import {IGroupView} from "../../modules/contacts/models/IGroupView";
import {AuthUtil} from "../../util/AuthUtil";

export const getAllContactsAction: any = createAsyncThunk("contacts/getAllContactsAction",
    async (payload: {}, {rejectWithValue}): Promise<IContactView[] | any> => {
        try {
            if (AuthUtil.isSetTokenToHeader()) {
                const response = await ContactService.getAllContacts();
                return response.data;
            }
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const getContactAction: any = createAsyncThunk("contacts/getContactAction",
    async (payload: { contactId: string }, {rejectWithValue}): Promise<IContactView | any> => {
        try {
            if (AuthUtil.isSetTokenToHeader()) {
                const {contactId} = payload;
                const response = await ContactService.getContact(contactId);
                return response.data;
            }
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const createContactAction: any = createAsyncThunk("contacts/createContactAction",
    async (payload: { contact: IContactView }, {rejectWithValue}): Promise<IContactView | any> => {
        try {
            if (AuthUtil.isSetTokenToHeader()) {
                const {contact} = payload;
                const response = await ContactService.createContact(contact);
                return response.data;
            }
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const updateContactAction: any = createAsyncThunk("contacts/updateContactAction",
    async (payload: { contact: IContactView, contactId: string }, {rejectWithValue}): Promise<IContactView | any> => {
        try {
            if (AuthUtil.isSetTokenToHeader()) {
                const {contact, contactId} = payload;
                const response = await ContactService.updateContact(contact, contactId);
                return response.data;
            }
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const deleteContactAction: any = createAsyncThunk("contacts/deleteContactAction",
    async (payload: { contactId: string }, {rejectWithValue}): Promise<{} | any> => {
        try {
            if (AuthUtil.isSetTokenToHeader()) {
                const {contactId} = payload;
                const response = await ContactService.deleteContact(contactId);
                return response.data;
            }
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const getAllGroupsAction: any = createAsyncThunk("contacts/getAllGroupsAction",
    async (payload: {}, {rejectWithValue}): Promise<IGroupView[] | any> => {
        try {
            if (AuthUtil.isSetTokenToHeader()) {
                const response = await ContactService.getAllGroups();
                return response.data;
            }
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const getGroupAction: any = createAsyncThunk("contacts/getGroupAction",
    async (payload: { contact: IContactView }, {rejectWithValue}): Promise<IGroupView | any> => {
        try {
            if (AuthUtil.isSetTokenToHeader()) {
                const {contact} = payload;
                const response = await ContactService.getGroup(contact);
                return response.data;
            }
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error)
        }
    });
