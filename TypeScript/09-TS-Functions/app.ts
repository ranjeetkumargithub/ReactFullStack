// simple
let greet = (name:string):void => {
    let msg:string = `Hello ${name}`;
    console.log(msg);
};
greet("Ranjeet");

// function with return type
let add = (a:number, b:number):number => {
    let result:number = a + b + a + b;
    return result;
};
let output:number = add(10, 20);
console.log(output);

// function with an object type as parameter
interface Mobile {
    brand : string;
    color : string;
    price : number;
}

let printMobile = (mobile:Mobile):void => {
    console.log(JSON.stringify(mobile));
};
let mobileOne:Mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};
printMobile(mobileOne);
printMobile({brand : 'Lenovo', color : 'black', price : 20000});