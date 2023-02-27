import * as ContactService from "../../services/ContactService.js";

window.addEventListener('DOMContentLoaded', () => {
    const contactId = document.URL.split("?")[1].split("=")[1];
    ContactService.deleteContact(contactId).then((response) => {
        if(response && response.data){
            //success
            window.location.href = "contact-admin.html";
        }
        
    }).catch((error) => {
        console.error(error);
    });
});