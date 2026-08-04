console.log("Level 1");
console.log("---Exercise1---");

console.log("Welcome to Node.js");
console.log("My Name is Ahmed");
console.log("I am Backend Developer");

console.log("---Exercise2---");

console.log(20 + 5);
console.log(50 - 12);
console.log(6 * 9);
console.log(100 / 4);

console.log("---Exercise2---");

let studentName1 = "Mahmoud";
let age = 20;
let isGraduated = true;
console.log(studentName1);
console.log(age);
console.log(isGraduated);

console.log("---Exercise4---");

console.log(process.version);
console.log(process.platform);

console.log(__dirname);
console.log(__filename);

console.log("Level 2");
console.log("---Exercise5---");

const mathutils = require("./math");

console.log(mathutils.add(12, 18));
console.log(mathutils.multiply(12, 10));

console.log("---Exercise6---");

const student = require('./student');

console.log(student.studentName);
console.log(student.studentAge);
console.log(student.studentTrack);
