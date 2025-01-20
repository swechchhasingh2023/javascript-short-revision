// Classes are a template for creating objects. 

// crate object using class
class Employee {
    constructor(empName, empSalary, empExp) {
        this.name= empName;
        this.salary =empSalary;
        this.exp= empExp;
    }
    empInfo(){
        return `my name is ${this.name} and i have ${this.exp} years of experience.`
    }
}

// let emp1= new Employee("Amey", "25000", 1);
// console.log(emp1);

// Inheritance using class component

class Person extends Employee{
    constructor(empName, empSalary, empExp, mobileNo){
        super(empName, empSalary, empExp);
        this.mNo= mobileNo;
    }
}

let person1= new Employee("Amey", "230000", 10, 1001);
console.log(person1);