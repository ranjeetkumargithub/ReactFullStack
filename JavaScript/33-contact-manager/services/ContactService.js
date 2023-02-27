const serverUrl = "http://localhost:9000";

/**
 * 1. Usage : Get all contacts
   Method : GET
   URL : http://localhost:9000/contacts
   params : No-params
 * @returns 
 */
export const getAllContacts = () => {
    const dataUrl = `${serverUrl}/contacts`;
    return axios.get(dataUrl);
};

/**
 * 2. Usage : Get a single contact
   Method : GET
   URL : http://localhost:9000/contacts/:contactId
   params : No-params
 */
export const getContact = (contactId) => {
    const dataUrl = `${serverUrl}/contacts/${contactId}`;
    return axios.get(dataUrl);
};

/**
 * 3. Usage : Create a contact
   Method : POST
   URL : http://localhost:9000/contacts/
   params : name , imageUrl, mobile, email, company, title, groupId
 */
export const createContact = (contact) => {
    const dataUrl = `${serverUrl}/contacts/`;
    return axios.post(dataUrl, contact);
};

/**
 * 4. Usage : Update a contact
   Method : PUT
   URL : http://localhost:9000/contacts/:contactId
   params : name , imageUrl, mobile, email, company, title, groupId
 */
export const updateContact = (contact, contactId) => {
    const dataUrl = `${serverUrl}/contacts/${contactId}`;
    return axios.put(dataUrl, contact);
};

/**
 * 5. Usage : Delete a contact
   Method : DELETE
   URL : http://localhost:9000/contacts/:contactId
   params : no-params
 */
export const deleteContact = (contactId) => {
    const dataUrl = `${serverUrl}/contacts/${contactId}`;
    return axios.delete(dataUrl);
};

/**
 * 6. Usage : Get all groups
   Method : GET
   URL : http://localhost:9000/groups
   params : No-params
 */
export const getAllGroups = () => {
    const dataUrl = `${serverUrl}/groups`;
    return axios.get(dataUrl);
};

/**
 * 7. Usage : Get a group
   Method : GET
   URL : http://localhost:9000/groups/:groupId
   params : No-params
 */
export const getGroup = (contact) => {
    const {groupId} = contact;
    const dataUrl = `${serverUrl}/groups/${groupId}`;
    return axios.get(dataUrl);
};