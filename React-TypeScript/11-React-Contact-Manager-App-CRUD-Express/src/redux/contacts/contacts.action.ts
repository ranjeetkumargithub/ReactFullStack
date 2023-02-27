import { createAsyncThunk } from "@reduxjs/toolkit";
import { IContact } from "../../modules/contacts/models/IContact";
import { IGroup } from "../../modules/contacts/models/IGroup";
import { ContactService } from "../../modules/contacts/services/ContactService";

export const getAllContactsAction: any = createAsyncThunk("contacts/getAllContactsAction",
    async (payload : {}, {rejectWithValue}): Promise<IContact[] | any> => {
        try{
            const response = await ContactService.getAllContacts();
            return response.data;
        }
        catch(error:any){
            if(!error.response){
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const getContactAction: any = createAsyncThunk("contacts/getContactAction",
    async (payload : {contactId:string}, {rejectWithValue}): Promise<IContact | any> => {
        try{
            const {contactId} = payload;
            const response = await ContactService.getContact(contactId);
            return response.data;
        }
        catch(error:any){
            if(!error.response){
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const createContactAction: any = createAsyncThunk("contacts/createContactAction",
    async (payload : {contact:IContact}, {rejectWithValue}): Promise<IContact | any> => {
        try{
            const {contact} = payload;
            const response = await ContactService.createContact(contact);
            return response.data;
        }
        catch(error:any){
            if(!error.response){
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const updateContactAction: any = createAsyncThunk("contacts/updateContactAction",
    async (payload : {contact:IContact, contactId:string}, {rejectWithValue}): Promise<IContact | any> => {
        try{
            const {contact, contactId} = payload;
            const response = await ContactService.updateContact(contact, contactId);
            return response.data;
        }
        catch(error:any){
            if(!error.response){
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const deleteContactAction: any = createAsyncThunk("contacts/deleteContactAction",
    async (payload : {contactId:string}, {rejectWithValue}): Promise<{} | any> => {
        try{
            const {contactId} = payload;
            const response = await ContactService.deleteContact(contactId);
            return response.data;
        }
        catch(error:any){
            if(!error.response){
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const getAllGroupAction: any = createAsyncThunk("contacts/getAllGroupAction",
    async (payload : {}, {rejectWithValue}): Promise<IGroup[] | any> => {
        try{
            const response = await ContactService.getAllGroups();
            return response.data;
        }
        catch(error:any){
            if(!error.response){
                throw error
            }
            return rejectWithValue(error)
        }
    });

export const getGroupAction: any = createAsyncThunk("contacts/getGroupAction",
    async (payload : {contact:IContact}, {rejectWithValue}): Promise<IGroup | any> => {
        try{
            const {contact} = payload;
            const response = await ContactService.getGroup(contact);
            return response.data;
        }
        catch(error:any){
            if(!error.response){
                throw error
            }
            return rejectWithValue(error)
        }
    });