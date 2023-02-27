// if-else , Switch

let currentTime:number = 10;
let wishMessage:string = "";
if(currentTime >= 0 && currentTime <= 12){
    wishMessage = "Good Morning";
}
else if(currentTime >= 13 && currentTime <= 17){
    wishMessage = "Good Afternoon";
}
else if(currentTime >= 18 && currentTime <= 23){
    wishMessage = "Good Evening";
}
else{
    wishMessage = "Invalid Hrs";
}
console.log(wishMessage);


// Switch
let day:number = new Date().getDay();
let today:string = "";
switch(day){
    case 0: today = "SUNDAY";
    break;
    case 1: today = "MONDAY";
    break;
    case 2: today = "TUESDAY";
    break;
    case 3: today = "WEDNESDAY";
    break;
    case 4: today = "THURSDAY";
    break;
    case 5: today = "FRIDAY";
    break;
    case 6: today = "SATURDAY";
    break;
    default : today = "Invalid";
    break;
}
console.log(today);