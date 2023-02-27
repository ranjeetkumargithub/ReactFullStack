// keyup event example
let textBox = document.querySelector("#username");
textBox.addEventListener("keyup", () => {
    let textEntered = textBox.value;
    let messageElement = document.querySelector("#msg");
    messageElement.textContent = textEntered;
});