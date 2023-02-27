import* as ContactService from "../../services/ContactService.js";

/**
 * input event on image field
 */
const imageInputElement = document.querySelector("#image-input");
const displayImageElement = document.querySelector("#contact-img");
imageInputElement.addEventListener('input', (Event) => {
    const imageUrl = event.target.value;
    displayImageElement.setAttribute('src', imageUrl);
})


const isEmptyFields = (contact) => {
    for(let value of Object.values(contact)){
        if(value ===""){
            return true;
        }
    }
    return false;
};


/**
 * when the form is submitted
 */
const contactFormElement = document.querySelector("#add-contact-form");
contactFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
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
        ContactService.createContact(contact).then((response) => {
            if(response && response.data){
                //success
                window.location.href = "contact-admin.html";
            }
        }).catch((error) => {
            console.log(error);
        });
    }
});