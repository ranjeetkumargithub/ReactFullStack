console.log("Statement 1");
console.log("Statement 2");
setTimeout( () => {
    console.log("Statement 3");
}, 3000);
console.log("Statement 4");
console.log("Statement 5");
console.log("Statement 6");


/**
 * callback()
 * a function which takes another function as a parameter, and call that function once the actual function finishes
 */
const sum = (a, b) => {
    return a + b;
};
const mul = (a, b) => {
    return a * b;
};
let calculate = (num1, num2, sumFn) => {
    let result = sumFn(num1, num2);
    console.log(result + 20);
};
calculate(10, 20, sum);
calculate(10, 20, mul);
calculate(10, 20, (a, b) => {
    return b - a;
});