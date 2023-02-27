/**
 * 1. Normal Function
 * 2. Function expression
 * 3. Arrow function
 */


// Normal function
function printNF(startNumber, endNumber){
    let result = "";
    if (startNumber <= endNumber){
        for(let a= startNumber; a<=endNumber; a++){
            result += `${a} `;
        }
    }
    else{
        result = "Start number should be less than end number";
    }
    console.log(result);
}

printNF(5, 100);


// function expression
const printFE = function(startNumber, endNumber){
    let result = "";
    if(startNumber <= endNumber){
        for(let a = startNumber; a<=endNumber; a++){
            result += `${a} `;
        }
    }
    else{
        result = "Start number should be less than end number";
    }
    console.log(result);
}

printFE(5, 100);


// Arrow function
const printAF = (startNumber, endNumber) => {
    let result = "";
    if(startNumber <= endNumber){
        for(let a = startNumber; a<=endNumber; a++){
            result += `${a} `;
        }
    }
    else{
        result = "Start number should be less than end number";
    }
    console.log(result);
}

printAF(5, 100);



let  num1 = 10;

// function with return type
const sum = (a, b) => {
    return a + b;
}
const mul = (a, b) => {
    return a * b;
}

let sumResult = sum(10, 20);
console.log(sumResult);
let mulResult = mul(10, 20);
console.log(mulResult);


const calc = (x, y) => {
    console.log(x + y);
}
calc(sumResult, mulResult);


// scopes
let a = 10;
const greetOne = (a, b) => {
    console.log(a + b);
}
greetOne(20, 30);


// Prepare Coffee
/**
 * 1. get milk from shop
 * 2. boil milk with water
 * 3. add suger and coffee
 */

const getMilkFromShop = (money) => {
    let milk = `Milk worth ${money}rs`;
    return milk;
}

const boilMilk = (milk, water) => {
    let result = `Boiling ${milk} with ${water}`;
    return result;
}

const addSuger = (suger, coffee, milk) => {
    let coffeeResult = `Mixed with ${suger} ${coffee} ${milk}`;
    return coffeeResult;
}

const makeCoffee = () => {
    let money = 20;
    let milk = getMilkFromShop(money);
    let water = "50ml Water";
    let boiledMilk = boilMilk(milk, water);
    let suger = "50gr Suger";
    let coffeePower = "10gr Coffee";
    let coffee = addSuger(suger, coffeePower, boiledMilk);
    console.log(coffee);
}
makeCoffee();