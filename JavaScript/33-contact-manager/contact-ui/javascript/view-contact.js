import * as ContactService from "../../services/ContactService.js";

window.addEventListener('DOMContentLoaded', () => {
    const contactId = document.URL.split("?")[1].split("=")[1];
    ContactService.getContact(contactId).then((contactResponse) => {
        const contact = contactResponse.data;
        ContactService.getGroup(contact).then((groupResponse) => {
            const group = groupResponse.data;
            displayContact(contact,group);
        }).catch((error) => {
            console.error(error);
        });
        
    }).catch((error) => {
        console.error(error);
    });
});

const displayContact = (contact,group) => {
    let contactRowElement = document.querySelector("#contact-row");
    let contactCard = `<div class="col-sm-3">
            <img src="${contact.imageUrl}" alt="" class="img-fluid rounded-circle shadow-lg">
        </div>
        <div class="col-sm-6">
            <ul class="list-group">
                <li class="list-group-item list-group-item-light">
                    Name : <span class="fw-bold">${contact.name}</span>
                </li>
                <li class="list-group-item list-group-item-light">
                    Mobile : <span class="fw-bold">${contact.mobile}</span>
                </li>
                <li class="list-group-item list-group-item-light">
                    Email : <span class="fw-bold">${contact.email}</span>
                </li>
                <li class="list-group-item list-group-item-light">
                    Company : <span class="fw-bold">${contact.company}</span>
                </li>
                <li class="list-group-item list-group-item-light">
                    Title : <span class="fw-bold">${contact.title}</span>
                </li>
                <li class="list-group-item list-group-item-light">
                    Group : <span class="fw-bold">${group.name}</span>
                </li>
            </ul>
        </div>`;
    contactRowElement.innerHTML = contactCard;
};