console.log("---Exercise1---");
let num1 = 50;
let num2 = 40;
let result = num1 + num2;
console.log(num1, " + ", num2, " = ", result);

console.log("---Exercise2---");
num1 = 90;
num2 = 80;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2;

console.log("sum = ", sum);
console.log("Difference = ", difference);
console.log("Product = ", product);
console.log("Division = ", division);
console.log("Remainder = ", remainder);

console.log("---Exercise3---");

let width = 10;
let height = 5;
let area = 0.5 * width * height;

console.log("area = ", area);

console.log("---Exercise4---");

let degree1 = 50;
let degree2 = 39;
let degree3 = 41;

let average = (degree1 + degree2 + degree3) / 3;
console.log("Average = ", average);

console.log("---Exercise5---");
let score = 100;
score += 20;
score -= 10;
score *= 2;
console.log(score);

console.log("---Exercise6---");

let num = -20;

if (num >= 0) {
  console.log("positive");
} else {
  console.log("negative");
}

console.log("---Exercise7---");

num = 51;

if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

console.log("---Exercise8---");

num1 = 50;
num2 = 30;

if (num1 > num2) {
  console.log("num1 > num2");
} else if (num1 < num2) {
  console.log("num2 > num1");
} else {
  console.log("num1 = num2");
}

console.log("---Exercise9---");

num1 = 20;
num2 = 50;
let num3 = 90;

let biggest = num1;

if (num2 > biggest) {
  biggest = num2;
}

if (num3 > biggest) {
  biggest = num3;
}

console.log(biggest);

console.log("---Exercise10---");

let grade = 76;

if (grade >= 85) {
  console.log("Excellent");
} else if (grade >= 70) {
  console.log("Very Good");
} else if (grade >= 60) {
  console.log("Good");
} else if (grade >= 50) {
  console.log("Accepted");
} else {
  console.log("failed");
}

console.log("---Exercise11---");

let price = 750;

if (price > 1000) {
  price *= 1 - 0.2;
} else if (price > 500) {
  price *= 1 - 0.1;
} else {
  price *= 1;
}

console.log(price);
