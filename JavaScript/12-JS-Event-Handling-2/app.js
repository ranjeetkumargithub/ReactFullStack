
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



