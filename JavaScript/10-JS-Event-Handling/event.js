const h2Element = document.querySelector("#card h2");

/**
 * GM Button
 */
const gmButton = document.querySelector("#gm-btn");
gmButton.addEventListener('click', () => {
    h2Element.textContent = "Hello Good Morning";
    h2Element.setAttribute("class", "red");
});


/**
 * GA Button
 */
const gaButton = document.querySelector("#ga-btn");
gaButton.addEventListener('click', () => {
    h2Element.textContent = "Hello Good Afternoon";
    h2Element.setAttribute("class", "blue");
});


/**
 * click on Good Evening Button
 */
const clickGE = () => {
    h2Element.textContent = "Hello Good Evening";
    h2Element.setAttribute("class", "green");
};


