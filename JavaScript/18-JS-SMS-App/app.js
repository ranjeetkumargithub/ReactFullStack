// sms app
let textAreaEl = document.querySelector("#text-area");
let charCountEl = document.querySelector("#char-count");

textAreaEl.addEventListener("keyup", () => {
    let textLength = textAreaEl.value.length;
    charCountEl.textContent = textLength;
});