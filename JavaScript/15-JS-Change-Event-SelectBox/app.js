// change event on select box
// let selectBox = document.querySelector("#lang-select");
// selectBox.addEventListener("change", () => {
//     let selectedOption = selectBox.value;
//     let languageOption = document.querySelector("#lang-option");
//     languageOption.textContent = selectedOption;
// });


// another method
const selectBox = document.querySelector("#lang-select");
selectBox.addEventListener('change', (event) => {
    document.querySelector("#lang-option").textContent = event.target.value;
});