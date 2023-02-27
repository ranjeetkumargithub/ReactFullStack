import axios from 'axios';
import {IContact} from "../models/IContact";
import {IGroup} from "../models/IGroup";

export class ContactService{
    private static serverUrl:string = `http://localhost:9000`;

    /**
     * 1. Usage : Get all contacts
     *    Method : GET
     *    URL : http://localhost:9000/contacts
     *    params : No-params
     */
    public static getAllContacts():Promise<{data : IContact[]}>{
        const dataUrl:string = `${this.serverUrl}/contacts`;
        return axios.get(dataUrl);
    }

    /**
     * 2. Usage : Get a single contact
     *    Method : GET
     *    URL : http://localhost:9000/contacts/:contactId
     *    params : No-params
     */
    public static getContact(contactId:string):Promise<{data : IContact}>{
        const dataUrl:string = `${this.serverUrl}/contacts/${contactId}`;
        return axios.get(dataUrl);
    }

    /**
     * 3. Usage : Create a contact
     *    Method : POST
     *    URL : http://localhost:9000/contacts/
     *    params : name , imageUrl, mobile, email, company, title, groupId
     */
    public static createContact(contact:IContact):Promise<{data : IContact}>{
        const dataUrl:string = `${this.serverUrl}/contacts/`;
        return axios.post(dataUrl,contact);
    }

    /**
     * 4. Usage : Update a contact
     *    Method : PUT
     *    URL : http://localhost:9000/contacts/:contactId
     *    params : name , imageUrl, mobile, email, company, title, groupId
     */
    public static updateContact(contact:IContact, contactId:string):Promise<{data : IContact}>{
        const dataUrl:string = `${this.serverUrl}/contacts/${contactId}`;
        return axios.put(dataUrl,contact);
    }

    /**
     * 5. Usage : Delete a contact
     *    Method : DELETE
     *    URL : http://localhost:9000/contacts/:contactId
     *    params : no-params
     */
    public static deleteContact(contactId:string):Promise<{data : {}}>{
        const dataUrl:string = `${this.serverUrl}/contacts/${contactId}`;
        return axios.delete(dataUrl);
    }

    /**
     * 6. Usage : Get all groups
     *    Method : GET
     *    URL : http://localhost:9000/groups
     *    params : No-param
     */
    public static getAllGroups():Promise<{data : IGroup[]}>{
        const dataUrl:string = `${this.serverUrl}/groups`;
        return axios.get(dataUrl);
    }

    /**
     * 7. Usage : Get a group
     *    Method : GET
     *    URL : http://localhost:9000/groups/:groupId
     *    params : No-params
     */
    public static getGroup(contact:IContact):Promise<{data : IGroup}>{
        const {groupId} = contact;
        const dataUrl:string = `${this.serverUrl}/groups/${groupId}`;
        return axios.get(dataUrl);
    }
}