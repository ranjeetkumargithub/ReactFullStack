import * as ContactService from "../../services/ContactService.js";


const isEmptyFields = (contact) => {
    for(let value of Object.values(contact)){
        if(value ===""){
            return true;
        }
    }
    return false;
};


/**
 * input event on image field
 */
const imageInputElement = document.querySelector("#image-input");
const displayImageElement = document.querySelector("#contact-img");
imageInputElement.addEventListener('input', (Event) => {
    const imageUrl = event.target.value;
    displayImageElement.setAttribute('src', imageUrl);
})

/**
 * get the contact form when the page is loaded
 */
window.addEventListener('DOMContentLoaded', () => {
    const contactId = document.URL.split("?")[1].split("=")[1];
    ContactService.getContact(contactId).then((contactResponse) => {
        const contact = contactResponse.data;
        if(!isEmptyFields(contact)){
            populateFormData(contact);
        }
    }).catch((error) => {
        console.error(error);
    });
});


/**
 * to populate the existing contact date
 * @param {*} contact 
 */
const populateFormData = (contact) => {
    document.querySelector("#name-input").value = contact.name;
    document.querySelector("#image-input").value = contact.imageUrl;
    document.querySelector("#email-input").value = contact.email;
    document.querySelector("#mobile-input").value = contact.mobile;
    document.querySelector("#company-input").value = contact.company;
    document.querySelector("#title-input").value = contact.title;
    document.querySelector("#group-input").value = contact.groupId;
    document.querySelector("#contact-img").setAttribute('src', contact.imageUrl);
};


/**
 * when the form is submitted
 */
const contactFormElement = document.querySelector("#edit-contact-form");
contactFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const contactId = document.URL.split("?")[1].split("=")[1];
    const contact = {
        name : document.querySelector("#name-input").value,
        imageUrl : document.querySelector("#image-input").value,
        email : document.querySelector("#email-input").value,
        mobile : document.querySelector("#mobile-input").value,
        company : document.querySelector("#company-input").value,
        title : document.querySelector("#title-input").value,
        groupId : document.querySelector("#group-input").value
    };
    if(Object.keys(contact).length > 0 && !isEmptyFields(contact)){
        ContactService.updateContact(contact, contactId).then((response) => {
            if(response && response.data){
                //success
                window.location.href = "contact-admin.html";
            }
        }).catch((error) => {
            console.log(error);
        });
    }
});