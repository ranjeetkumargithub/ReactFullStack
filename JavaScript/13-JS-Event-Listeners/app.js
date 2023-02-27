/**
 * JavaScript event listners
 * 1. get the html element/tag
 * 2. attach an event to the element / tag
 * 3. write a function for event handling
 */

let h1Tag = document.querySelector("#msg-1");

let sayGM = () => {
    h1Tag.textContent = "Good Morning";
    h1Tag.setAttribute("class", "limegreen");
}

let sayGA = () => {
    h1Tag.textContent = "Good Afternoon";
    h1Tag.setAttribute("class", "orangered");
}

let sayGE = () => {
    h1Tag.textContent = "Good Evening";
    h1Tag.setAttribute("class", "purple");
}

let sayGN = () => {
    h1Tag.textContent = "Good Night";
    h1Tag.setAttribute("class", "black");
}


// good morning button
let gmButton = document.querySelector("#gm-btn");
gmButton.addEventListener("click", () => {
    sayGM();
});

// good afternoon button
let gaButton = document.querySelector("#ga-btn");
gaButton.addEventListener("click", () => {
    sayGA();
});

// good morning button
let geButton = document.querySelector("#ge-btn");
geButton.addEventListener("click", () => {
    sayGE();
});

// good morning button
let gnButton = document.querySelector("#gn-btn");
gnButton.addEventListener("click", () => {
    sayGN();
});
