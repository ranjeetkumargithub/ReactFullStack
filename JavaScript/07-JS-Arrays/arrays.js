/**
 * collection of objects
 */

let technologies = ["HTML", "CSS", "JavaScript", "Bootstrap"];
console.log(technologies);
console.log(technologies[3]);
console.log(technologies.length);

/**
 * normal for loop
 */
let result = "";
for(let i = 0; i<=technologies.length-1; i++){
    result = result + `${technologies[i]} `;
}
console.log(result);

/**
 * for-in loop
 */
result = "";
for(let index in technologies){
    result = result + `${technologies[index]} `;
}
console.log(result);

/**
 * for-of loop
 */
result = "";
for(let tech of technologies){
    result = result + `${tech} `;
}
console.log(result);


/**
 * forEach function
 */
result = "";
technologies.forEach(function(tech){
    result = result + `${tech} `;
});
console.log(result);

/**
 * forEach Arrow function
 */
result = "";
technologies.forEach((tech) => {
    result = result + `${tech} `;
});
console.log(result);

/**
 * functions of arrays
 */
console.log(technologies);
technologies.unshift("React JS");  //add to the starting of an array
console.log(technologies);
technologies.shift();  // remove starting of array element
console.log(technologies);
technologies.push("Angular");  //Add to the end of an array
console.log(technologies);
technologies.pop();  // remove the end of an array element
console.log(technologies);

console.log(technologies.join("-"));



/**
 * array of object
 */
let employees = [
    {
        sno : "A001",
        name : "Rajan",
        age : 25,
        designation : "Software Engineer"
    },
    {
        sno : "A002",
        name : "John",
        age : 30,
        designation : "Sr.Software Engineer"
    },
    {
        sno : "A003",
        name : "Wilson",
        age : 35,
        designation : "Tech Lead"
    },
    {
        sno : "A004",
        name : "Arun",
        age : 40,
        designation : "Manager"
    },
    {
        sno : "A005",
        name : "Laura",
        age : 45,
        designation : "Director"
    }
];
console.log(employees);

//get an employee
const getEmployee = (empId) => {
    // for (let employee of employees){
    //     if(employee.sno === empId){
    //         return employee;
    //     }
    // }
    let employee = employees.find(employee => {
        return employee.sno === empId;
    });
    return employee;
};
const employeeOne = getEmployee("A005");
console.log(employeeOne);

// get all junior employees
const getAllJuniorEmployee = (employees) => {
    let jrEmployees = [];
    for(let employee of employees){
        if(employee.age <= 30){
            jrEmployees.push(employee);
        }
    }
    return jrEmployees;
};
let jrEmployees = getAllJuniorEmployee(employees);
console.log(jrEmployees);


// get all junior employees -> shortcut
const getAllJuniorEmployeeOne = (employees) => {
    return employees.filter((employee) => employee.age <= 30);
};
jrEmployees = getAllJuniorEmployeeOne(employees);
console.log(jrEmployees);

/**
 * filter -> [{}]
 * find -> {} | undefined
 * map ->[age] , [name] , [designation]
 */

// map
const getAllEmployeeNames = (employees) => {
    return employees.map(employee => employee.name);
};
const employeeNames = getAllEmployeeNames(employees);
console.log(employeeNames);


//map
const getAllEmployeeNames1 = (employees) => {
    return employees.map(employee => {
        if(employee.age <=30){
            return {
                name: employee.name,
                age: employee.age
            }
        }
    }).filter(item => item);
        
};
const employeeNames1 = getAllEmployeeNames1(employees);
console.log(employeeNames1);



