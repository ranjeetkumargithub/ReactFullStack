// String, Number, Boolean, null, undefined, object, array, void, enum, any

// String
let employeeName:string = 'John';
console.log(`Employee Name : ${employeeName}`);

//Number
let employeeAge:number = 45;
console.log(`Employee Age : ${employeeAge}`);

// Boolean
let isManager:boolean = true;
console.log(`Is Manager : ${isManager}`);

// null
let test:null = null;
console.log(`Test : ${test}`);

// undefined
let abc:undefined = undefined;
console.log(`ABC : ${abc}`);

// object
let mobile:Object = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};
console.log(mobile);

// Array
let colors:string[] = ['white', 'black', 'silver', 'blue'];
console.log(colors);

// void
let greet = (name:string):void => {
    console.log(`Hello ${name}`);
};
greet('Ranjeet');

// Enum -> for constant values
enum Month {
    JAN = 'JANUARY',
    FEB = 'FEBRUARY'
}
console.log(Month.JAN); // JANUARY

// any
let a:any = 'test';
a = 10;
a = {};
a = null;
a = true;