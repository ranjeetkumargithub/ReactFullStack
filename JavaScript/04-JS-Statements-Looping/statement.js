/**
 * Statements
 * 1. if-else
 * 2. switch
 * 3. for-loop
 * 4. while
 * 5. do-while
 */

// if-else
/**
 * if(condition){
 *      if(condition){
 *          // true
 *      }
 * }
 * else if(condition){
 *      if(condition){
 *          // true
 *      }
 * }
 * else if(condition){
 *      // true
 * }
 * else{
 *      // false
 * }
 */

const currentTime = 7;
let message = "";
if(currentTime > 0 && currentTime <= 12){
    message = "Good Morning";
}
else if(currentTime > 12 && currentTime <= 5){
    message = "Good Afternoon";
}
else if(currentTime > 5 && currentTime <= 23){
    message = "Good Evening";
}
else{
    message = "Invalid Time";
}
console.log(message);

// 2. switch
/**
 * switch(condition){
 *      case match1:
 *         // statements
 *      return;
 *       case match1:
 *         // statements
 *      return;
 *       default:
 *         // statements
 *      return;
 * }
 */

console.log(new Date().getDate());
console.log(new Date().getDay());

const today = new Date().getDay();
let fullDay = "";
switch(today){
    case 0:
        fullDay = "Sunday";
        break;
    case 1:
        fullDay = "Monday";
        break;
    case 2:
        fullDay = "Tueaday";
        break;
    case 3:
        fullDay = "Wednesday";
        break;
    case 4:
        fullDay = "Thursday";
        break;
    case 5:
        fullDay = "Friday";
        break;
    case 6:
        fullDay = "Saturday";
        break;
    default:
        fullDay = "Invalid";
        break;
}
console.log(`Today is : ${fullDay}`);

// for-loop
/**
 * for(initialization; condition; incr/decr){
 *      // statements
 * }
 */

/**
 * print from 0 - 10
 */

let result = "";
for(let a = 0; a<=10; a++){
    result = result + `${a} `;
}
console.log(result);

/**
 * print from 40 to 0 diff 2
 */

result = "";
for(let a = 40; a>=0; a -= 2){
    result += `${a} `;
}
console.log(result);

/**
 * print the stars 5
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * * * *
 */

result = "";
for(let i = 1; i<=5; i++){
    for(let j = 1; j<=i; j++){
        result += `* `;
    }
    result += `\n`;
}
console.log(result);
