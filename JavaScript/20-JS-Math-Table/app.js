// math table

let numberEl = document.querySelector("#req-number");
numberEl.addEventListener("keyup", () => {
    let theNumber = Number(numberEl.value);
    document.querySelector("#number").textContent = theNumber;
    calculate();
});

let rangeEl = document.querySelector("#multiplier");
rangeEl.addEventListener("input", () => {
    let selectedMultiplier = Number(rangeEl.value);
    document.querySelector("#multiples").textContent = selectedMultiplier;
    calculate();
});


//calculate
let calculate = () => {
    let theNumber = Number(document.querySelector("#number").textContent);
    let multiplier = Number(document.querySelector("#multiples").textContent);
    let mathResult = theNumber * multiplier;
    document.querySelector("#result").textContent = mathResult;
};