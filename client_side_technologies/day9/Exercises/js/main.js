console.log("----Exercise1----");
function printWelcome() {
  console.log("Welcome to Backend Training");
}

printWelcome();

console.log("----Exercise2----");
function greet(name) {
  console.log("Hello ", name);
}

greet("Mahmoud");

console.log("----Exercise3----");
function calculateAge(birthYear) {
  return 2026 - birthYear;
}

console.log("I am ", calculateAge(2006), "Years old");

console.log("----Exercise4----");
function calculate(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  }
  if (operator == "-") {
    return num1 - num2;
  }
  if (operator == "*") {
    return num1 * num2;
  }
  if (operator == "/") {
    return num1 / num2;
  }
  if (operator == "^") {
    return num1 ** num2;
  }
  if (operator == "%") {
    return num1 % num2;
  }
}

console.log(calculate(80, 70, "%"));

console.log("----Exercise5----");

let square = function (number) {
  return number * number;
};

console.log(square(5));

console.log("----Exercise6----");

let x = 10;
function test() {
  let y = 20;
  console.log(x);
  console.log(y);
}
test();
// console.log(y); // error y ليست موجودة

console.log("----Exercise7----");

// ES6 ليست مطلوبة

console.log("----Exercise8----");

function hello(username = "Guest") {
  console.log("Hello ", username);
}

hello("mahmoud");
hello();
