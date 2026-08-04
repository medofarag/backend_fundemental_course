console.log("---exercise1---");

const calc = require('./math.js');

console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(6, 7));
console.log(calc.divide(20, 5));

console.log("---exercise2---");

const { add, subtract, divide, multiply } = calc;

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(6, 7));
console.log(divide(20, 5));

console.log("---exercise3---");

const data = require('./data.js')

console.log(typeof data.name);
console.log(typeof data.age);
console.log(typeof data.isGraduated);
console.log(typeof data.skills);
console.log(typeof data.calculateAge());

console.log("---exercise4---");

const sayHello = require('./sayHello.js');

sayHello.sayHello();

console.log("---exercise5---");

const student = require('./student.js');

const { studentName: stdname, studentAge: stdAge, studentTrack: stdTrack } = student;

console.log("Student Name:", stdname);
console.log("Student Age", stdAge);
console.log("Student Track", stdTrack);


