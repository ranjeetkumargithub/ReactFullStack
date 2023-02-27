/**
 * 1. Arithmetic operators -> +, -, *, /, %
 * 2. Shorthand math -> +=, -=, *=, /=
 * 3. incr/decr -> ++, --
 * 4. Conditional operators -> < > <= >= !=
 * 5. Logical Operators -> &&, ||, ^
 * 6. Ternary Operators -> ?:
 */

// 1. Arithmetic operators -> +, -, *, /, %
let num1:number = 10;
let num2:number = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

// if a number is even / odd
let digit:number = 16;
if(digit % 2 === 0){
    console.log(`${digit} is an Even Number`);
}
else{
    console.log(`${digit} is an Odd Number`);
}

//2. Shorthand math -> +=, -=, *=, /=
let val1:number = 10;
let val2:number = 20;
let add:number = 10;
// add = add + (val1 * val2); // 10 + (10 * 20) -> // add += (val1 * val2);
add += (val1 * val2);
console.log(add);

// 3. incr/decr -> ++, --
let x:number = 10;
x = x + 1; // 11
x += 1; // 12
x++; // 13
console.log(x);

// 4. Conditional operators -> < > <= >= !=
let marks:number = 75;
let result:string = '';
if(marks <= 35){
    result = "You failed the exam";
}
else{
    result = "You cleared the exam";
}
console.log(result);

// 5. Logical Operators -> &&, ||, ^
/**
 * && -> T T -> T
 * || -> F F -> F
 * ^ -> diff -> T
 */
let inRelation:boolean = true;
let parentsAgreed:boolean = false;
if(inRelation && parentsAgreed){
    console.log("Get Marry Soon");
}
else{
    console.log("Wait Untill parents Agreed");
}

// 6. Ternary Operators -> ?:
/**
 *  (condition)? true part : false part;
 */
marks = 85;
result = "";
(marks >= 35) ? result = "You Cleared the Exam" : result = "You Failed the Exam";
console.log(result);