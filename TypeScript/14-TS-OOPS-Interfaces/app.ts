interface IStudent {
    firstName : string;
    lastName : string;
    age : number;
    course : string;

    fullName : () => string;
    biography : () => void;
}

class Student implements IStudent{
    firstName: string;
    lastName: string;
    age: number;
    course: string;

    constructor(firstName:string, lastName:string, age:number, course:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
    }

    public fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }

    public biography():void{
        let bio:string = `FULL NAME : ${this.fullName()}
        AGE : ${this.age}
        COURSE : ${this.course}`;
        console.log(bio);
    }
}
let student = new Student('Arjun', 'Reddy', 25, 'MBBS');
student.biography();