/**
 * JavaScript Operatoes
 * math operators  + - / *
 * shorthand math operators  += -= /= *=
 * conditional operators < > <= >= !==
 * logical operators && ||
 * incr , decr operators ++ --
 * ternary operators ?:
 * eqality operators == ===
 */

//1. math operators  + - / *
const num1 = 20;
const num2 = 30;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);
console.log(`Module : ${num1 % num2}`);

//2. shorthand math operators  += -= /= *=
/**
 * var = var + (something) => var += (something)
 * var = var - (something) => var -= (something)
 * var = var * (something) => var *= (something)
 * var = var / (something) => var /= (something)
 */
let price = 100;
let qty = 5;
let total = 10; 
// total = total + (price * qty);
total += (price * qty);
console.log(total);

// 3. conditional operators < > <= >= !==
/**
 * qty >= 10 ->available
 * qty < 10 > 0 ->runningOut
 * qty == 0 ->out-of-stock
 */
let availableQty = 10;
let result = "";
if(availableQty >= 10){
    result = "Available";
}
else if(availableQty < 10 && availableQty > 0){
    result = "Running Out";
}
else{
    result = "Out of Stock";
}
console.log(`Product Status : ${result}`);

// 4. logical operators && ||
let courseFinished = true;
let projectFinished = 2;
result = "";
if(courseFinished && projectFinished >= 2){
    result = "You are ready for the Job";
}
else{
    result = "Please make the project";
}
console.log(result);

// 5. incr , decr operators ++ --
let theNumber = 10;
theNumber = theNumber + 1;
theNumber += 1;
theNumber++;
console.log(`theNumber : ${theNumber}`);

// 6. ternary operators ?:
/**
 * (condition) ? true : false;
 */
result = "";
courseFinished = true;
projectFinished = 2;
(courseFinished && projectFinished >=2) ? 
    result = "You are ready for the Job" : result = "Please make the project"; 
console.log(result);

// 7. eqality operators  ===
let a = 10;
let b = 10;
if(a === b){
    console.log("Both are equal");
}
else{
    console.log("Both are not equal");
}

let mobileOne = {
    brand : "Apple",
    color : "Silver",
    price : 35000
};
let mobileTwo = {
    brand : "Apple",
    color : "Silver",
    price : 35000,
};
if(JSON.stringify(mobileOne) === JSON.stringify(mobileTwo)){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}