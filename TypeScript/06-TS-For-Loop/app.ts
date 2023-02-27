// for loop
/**
 *  for(initialization : condition : incr/decr){
 *      statements
 *  }
 */
// print the values from 0 - 10 diff - 1
let result:string = "";
for(let i:number = 0; i<=10; i++){
    result += `${i} `;
}
console.log(result);

// print the values fron 20 - 0 diff - 2
result = "";
for(let i:number = 20; i>=0; i-=2){
    result += `${i} `;
}
console.log(result);

// number : 5
/**
 *   *
 *   * *
 *   * * *
 *   * * * *
 *   * * * * *
 */
result = "";
for(let i:number = 1; i<=5; i++){
    for(let j:number = 1; j<=i; j++){
        result += ` * `;
    }
    result += `\n`;
}
console.log(result);


// number : 5
/**
 *  1
 *  2 2
 *  3 3 3
 *  4 4 4 4
 *  5 5 5 5 5
 */
result = "";
for(let i:number = 1; i<=5; i++){
    for(let j:number = 1; j<=i; j++){
        result += ` ${i} `;
    }
    result += `\n`;
}
console.log(result);

