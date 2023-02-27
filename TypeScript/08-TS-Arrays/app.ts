let colors:string[] = ['white' , 'black' , 'silver' , 'purple'];
console.log(colors);

// normal for loop
let output:string = "";
for(let i:number = 0; i<colors.length; i++){
    output += `${colors[i]} `;
}
console.log(output);
console.log(output.toUpperCase());

// for-in loop
output = '';
for(let index in colors){
    output += `${colors[index]} `;
}
console.log(output);
console.log(output.toUpperCase());

// for-of loop
output = '';
for(let color of colors){
    output += `${color} `;
}
console.log(output);
console.log(output.toUpperCase());

// forEach function
output = "";
colors.forEach(function(color) {
    output += `${color} `;
})
console.log(output);
console.log(output.toUpperCase());

// forEach with Arrow function
output = "";
colors.forEach((color) => {
    output += `${color} `;
})
console.log(output);
console.log(output.toUpperCase());

// Object Array
interface Employee {
    sno : string;
    name : string;
    age : number;
    designation : string;
    location : string;
}
let employees:Employee[] = [
    {
        sno : "AA10201",
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        location : 'Hyderabad'
    },
    {
        sno : "AA10202",
        name : 'Naveen',
        age : 28,
        designation : 'Sr.Software Engineer',
        location : 'Bangalore'
    },
    {
        sno : "AA10203",
        name : 'John',
        age : 45,
        designation : 'Project Manager',
        location : 'Hyderabad'
    },
    {
        sno : "AA10204",
        name : 'Wilson',
        age : 40,
        designation : 'Director',
        location : 'Bangalore'
    }
];
// console.log(employees);

// junior employee from array
let juniorEmployees:Employee[] = [] as Employee[];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// using filter function
let jrEmployees:Employee[] = employees.filter((employee) => {
    return employee.age <= 30;
});
console.log(jrEmployees);
