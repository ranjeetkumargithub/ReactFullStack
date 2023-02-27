/**
 * keyup event / input event
 */

const inputElement = document.querySelector("#text-input");
const displayElement = document.querySelector("#text-display");

inputElement.addEventListener("keyup", () => {
    displayElement.textContent = inputElement.value;
})


/**
 * GOOD
 * GOO
 * GO
 * G
 * @param {*} str 
 * @returns 
 */
const printTriangleOne = (str) => {
    let result = "";
    for(let i=0; i<=str.length-1; i++){
        result += `${str.substring(0, str.length-i)} \n`;
    }
    return result;
};

const inputElement1 = document.querySelector("#input-one");
const displayElement1 = document.querySelector("#display-one");
inputElement1.addEventListener('input', (event) => {
    displayElement1.textContent = printTriangleOne(event.target.value);
})


/**
 * G
 * GO
 * GOO
 * GOOD
 * @param {*} str 
 * @returns 
 */
const printTriangleTwo = (str) => {
    let result = "";
    for(let i=str.length-1; i>=0; i--){
        result += `${str.substring(0, str.length-i)} \n`;
    }
    return result;
};

const inputElement2 = document.querySelector("#input-two");
const displayElement2 = document.querySelector("#display-two");
inputElement2.addEventListener('input', (event) => {
    displayElement2.textContent = printTriangleTwo(event.target.value);
});