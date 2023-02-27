/**
 * setInterval
 * setTimeout
 * cleaseInterval
 */

let count = 0;
const greet = () => {
    count++;
    console.log("Greet Fn", count);
};
const intervalId = setInterval( () => {
    greet();
}, 1000);

setTimeout( () => {
    clearInterval(intervalId);
}, 10000);