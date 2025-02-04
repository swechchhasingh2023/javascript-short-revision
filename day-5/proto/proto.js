// prototype- It is a mechanism where we can create our own logic by using some pre defined properties, we can also create our own methods 
// we can also inherit properties and methods from another methods

// const person={
//     fName:"Amey",
//     company:"eclerx"
// }
// console.log(person)


// own method creation
 //we need constructor to write our own methods
 // constructor -special type function - create & initialize object
 // call - by usning new constructorName(paramenters);
 // value target - this keyword

 // create constructor
// function Obj(givesName){
//     this.name=givesName;
// }

// // cretae method - getName()

// Obj.prototype.getName = function(){
//     return this.name;
// }

// Obj.prototype.setName = function(updateName){
//     this.name=updateName;
// }

// Obj.prototype.multiply = function(a,b){
//     return a*b;
// }

// let person= new Obj("Swechchha");
// console.log(person);
// console.log(person.getName());
// console.log(person.setName("Amey"));
// console.log(person.multiply(4,6));



// Inheritance by using prototype

// Js - inheritance oops - Abstraction, Encapsulation, Inheritance, Polymorphism
// Inheritance - We can use existing properties, methods used in our program...
// Inheritance allow to use parent class into the child class...
// Simple (one parent & one child)
// Multiple - One parent & mutile child
// multilevel - One main parent, this main parent derive onther child then that child derived another child
// hierarchical - Multiple parent & one child
// Hybrid - combination of some interitance

// parent method
function Employee(empName, empSalary, empExp){ 
    this.name= empName;
    this.salary =empSalary;
    this.exp= empExp;
}

// create one method
Employee.prototype.empData= function(){
    return `my name is ${this.name} and i have ${this.exp} years of experience.`
}

let emp1=new Employee("Amey", "200000", 120);
console.log(emp1);

// // child method

// function Person(empName, empSalary, empExp, mobileNo ){
//     Employee.call(this, empName, empSalary, empExp); // we use parent method here
//     this.mNo= mobileNo;
// }
// //
// Person.prototype = Object.create(Employee.prototype); // Employee's all methods, argument now availabe for Person function

// // allow
// Person.prototype.constructor = Person;

// let person1=new Person("Amey", "200000", 120, 1001);
// console.log(person1);