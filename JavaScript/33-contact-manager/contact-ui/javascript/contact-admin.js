import * as ContactService from "../../services/ContactService.js";

window.addEventListener('DOMContentLoaded', () => {
    ContactService.getAllContacts().then((response) => {
        displayContacts(response.data);
    }).catch((error) => {
        console.error(error);
    });
})

const displayContacts = (contacts) => {
    let contactCardElement = "";
    let contactRowsElement = document.querySelector("#cards-row");
    for(let contact of contacts){
        contactCardElement += `<div class="col-md-6 mt-3">
        <div class="card shadow-lg">
            <div class="card-body bg-light rounded-2">
                <div class="row align-items-center">
                    <div class="col-sm-3">
                        <img src="${contact.imageUrl}" alt="" class="img-fluid rounded-circle shadow-lg">
                    </div>
                    <div class="col-sm-8">
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
                        </ul>
                    </div>
                    <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                        <a href="view-contact.html?contactId=${contact.id}" class="btn btn-warning mb-1">
                            <i class="bi bi-eye"></i>
                        </a>
                        <a href="edit-contact.html?contactId=${contact.id}" class="btn btn-primary mb-1">
                            <i class="bi bi-pencil"></i>
                        </a>
                        <a href="delete-contact.html?contactId=${contact.id}" class="btn btn-danger mb-1">
                            <i class="bi bi-trash"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
    contactRowsElement.innerHTML = contactCardElement;
};