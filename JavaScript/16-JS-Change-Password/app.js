let passwordBox = document.querySelector("#password");
let checkBox = document.querySelector("#checkbox");

// checkBox.addEventListener("change", () => {
//     let typeAttribute = passwordBox.getAttribute("type");
//     if(typeAttribute === "password"){
//         passwordBox.setAttribute("type", "text");
//     }
//     else{
//         passwordBox.setAttribute("type", "password");
//     }
// });


// another Method
checkBox.addEventListener('change', (event) => {
    if(event.target.checked){
        passwordBox.setAttribute("type", "text");
    }
    else{
        passwordBox.setAttribute("type", "password");
    }
});