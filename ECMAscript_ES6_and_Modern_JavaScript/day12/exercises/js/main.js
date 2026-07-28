console.log("----Exxercise1----");

const numbers = [5,10,15,20];

numbers.forEach((item)=>{
    console.log(item);
});

console.log("----Exxercise2----");

const names=[
"Ahmed",
"Ali",
"Sara",
"Mona"
];

names.forEach((item)=>{
    console.log(`Welcome ${item}`);
});

console.log("----Exxercise3----");

const prices=[100,250,300];

prices.forEach((item)=>{
    console.log("Price =",item);
});

console.log("----Exxercise4----");

const numbers2=[1,2,3,4];

const squared = numbers2.map((item)=>{
    return item**2;
})

console.log(squared);

console.log("----Exxercise5----");

const prices2=[100,200,300];

const newprices=prices2.map((item)=>{
    return item*(1+0.1);
});

console.log(newprices);

console.log("----Exxercise6----");

const names2=[
"Ahmed",
"Ali",
"Sara"
];

const uppercase = names2.map((name)=>{
    return name.toUpperCase();
});

console.log(uppercase);

console.log("----Exxercise7----");

const ages=[18,20,25];

const newages=ages.map((age)=>{
    return age + 1;
});

console.log(newages);

console.log("----Exxercise8----");

const numbers3=[5,10,15,20,25];

console.log(numbers3.filter(item => item>15));

console.log("----Exxercise9----");

const grades=[40,90,70,20,100];

console.log(grades.filter(item => item >= 50));

console.log("----Exxercise10----");

const names3=[
"Ahmed",
"Ali",
"Sara",
"Salma"
];

console.log(names3.filter(name => name.startsWith("S")));

console.log("----Exxercise11----");

let result = 0;

const numbers4=[10,20,30];

numbers4.forEach((num) => {
    result += num;
});

console.log(result);

console.log("----Exxercise12----");

const grades1=[70,80,90];

let sum = 0;
grades1.forEach((num) => {
    sum += num;
});

const average = sum/grades1.length;

console.log(average);

console.log("----Exxercise13----");

const students=[
{name:"Ahmed",grade:90},
{name:"Ali",grade:40},
{name:"Sara",grade:80}
];

students.forEach((name)=>{
    console.log(name.name);
});

console.log("----Exxercise14----");

students.forEach((item)=>{
    console.log(item.grade);
});

console.log("----Exxercise15----");

console.log(students.filter(item => item.grade >= 50));

console.log("----Exxercise16----");

let sum1 = 0;

students.forEach((item)=>{
    sum1 += item.grade;
});

const average1 = sum1/students.length;

console.log(average1);
