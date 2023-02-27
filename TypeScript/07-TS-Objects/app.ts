interface Mobile {
    brand : string;
    color? : string;  // ? -> optional -> it means if you don't impliment also not grtting error
    price : number;
}

let mobileObj:Mobile = {
    brand : 'Apple',
    // color : 'Silver',
    price : 35000
};
console.log(mobileObj);
console.log(mobileObj.brand);

// Nested Object
interface Address {
    street : string;
    city : string;
    state : string;
    country : string;
}

interface Student {
    name : string;
    age : number;
    course : string;
    addredd : Address;
}

let student:Student = {
    name : 'Arjun',
    age : 25,
    course : 'MBBS',
    addredd : {
        street : 'JubileeHills',
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);
console.log(student.addredd);