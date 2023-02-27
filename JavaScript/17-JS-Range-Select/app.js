// range select
//format number
let formatNumber = (number) => {
    let result = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    return result;
};


let rangeEl = document.querySelector("#range");
let amountEl = document.querySelector("#amount");

rangeEl.addEventListener("input", () => {
    let selectedAmount = rangeEl.value;
    amountEl.textContent = formatNumber(selectedAmount);
});