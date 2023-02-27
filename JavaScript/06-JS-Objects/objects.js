let mobile = {
    brand : "Apple",
    color : "black",
    price : 35000
};
console.log(mobile);

// get objects props/keys using dot notation
console.log(`Brand : ${mobile.brand}`);
console.log(`Color : ${mobile.color}`);
console.log(`Price : ${mobile.price}`);
console.log(`Camera : ${mobile.camera}`);  // non-existing - undefined

// get objects props/keys using [] notation
console.log(`Brand : ${mobile['brand']}`);
console.log(`Color : ${mobile['color']}`);
console.log(`Price : ${mobile['price']}`);
console.log(`Camera : ${mobile['camera']}`);  // non-existing - undefined


// accessing dynamic props
const propName = "brand";
console.log(`propName : ${mobile.propName}`);  // use only for static props
console.log(`propName : ${mobile[propName]}`);  // use for accessing dynamic props


// spread operator ...
let product = {
    name : "Tomatos",
    qty : 2,
    price : 20
};
console.log(product);

product = {
    ...product,
    qty : 4,
    price : 40,
    description : "For Curry & Juice"
};
console.log(product);


// Nested Objects
let student = {
    name : "Rajan",
    age : 21,
    college : createImageBitmap,
    address : {
        street : "ABC Street",
        city : "Hyderabad",
        state : "TS",
        country : "India"
    }
};
console.log(student);
console.log(student.address);

//print nested adta
console.log(`Street : ${student.address.street}
City : ${student.address.city} 
State : ${student.address.state} 
Country : ${student.address.country}`);

// destructuring in objects
let {street, country, city, state} = student.address;
console.log(`Street : ${street}
City : ${city} 
State : ${state} 
Country : ${country}`);

// Looping 
/**
 * Object.keys()
 * Object.values()
 * Object.entries()
 */

// keys()
console.log(Object.keys(mobile));

// values()
console.log(Object.values(mobile));

// entries()
console.log(Object.entries(mobile));


/**
 * iteration
 */
for(let key of Object.keys(mobile)){
    console.log(key);
}

for(let value of Object.values(mobile)){
    console.log(value);
}

for(let [key, value] of Object.entries(mobile)){
    console.log(`key : ${key}, value : ${value}`);
}

/**
 * Object to JSON String -> JSON.stringify()
 * JSON String to Object -> JSON.parse()
 */
console.log(mobile);
const jsonMobile = JSON.stringify(mobile);
console.log(jsonMobile);

const mobileObj = JSON.parse(jsonMobile);
console.log(mobileObj);







// CRUD OPERATION

// CREATE Operation
let employee = {};

employee.name = "John";
employee.company = "HCL";
employee.designation = "Manager";
employee.salary = 45000;
employee.isInsured = false;
console.log(employee);

// READ Operation
console.log(employee.name);

// Update Operation
console.log(employee.salary); // 45000
employee.salary = 55000;
console.log(employee.salary);
console.log(employee);

// Delete Operation
delete employee.isInsured;
console.log(employee);


