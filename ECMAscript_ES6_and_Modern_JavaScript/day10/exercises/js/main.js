console.log("----Exercise1----");

let age = 20;
age = 25;
console.log(age);

// result = 25

console.log("----Exercise2----");

/*
const name = "Ahmed";
name = "Ali";
console.log(name);

الخطأ أنه حاول تغيير قيمة name
مع أنه متغيير ثابت
*/

console.log("----Exercise3----");

const student = {
  name: "Ali",
  age: 20,
};
student.age = 21;
console.log(student);

/*
صحيح
*/

console.log("----Exercise4----");

const course = "JavaScript ES6";
console.log(`${course} course`);

console.log("----Exercise5----");

const name = "Ahmed";
const age1 = 22;
console.log(`My name is ${name} and my age is ${age1}`);

console.log("----Exercise6----");

let sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 8));

console.log("----Exercise7----");

let square = (a) => {
  return a ** 2;
};

console.log(square(8));

console.log("----Exercise8----");

let hello = (name = "guest") => {
  console.log("hello, " + name);
};

console.log(hello());
console.log(hello("Mahmoud"));

console.log("----Exercise9----");

let students = ["Mahmoud", "Mohamed", "Joe", "Hamza", "Abdo"];
console.log(students);

console.log("----Exercise10----");

const colors = ["Red", "Blue", "Green", "Black"];

console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
