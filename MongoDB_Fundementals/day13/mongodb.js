// use iti_lab

db.students.insertMany([
  {
    name:"Ahmed",
    age:22,
    department:"CS",
    grade:3.4,
    skills:["HTML","CSS"]
  },
  {
    name:"Sara",
    age:21,
    department:"AI",
    grade:3.8,
    skills:["Python","ML"]
  },
  {
    name:"Omar",
    age:23,
    department:"IS",
    grade:2.9,
    skills:["Java","SQL"]
  },
  {
    name:"Mona",
    age:22,
    department:"CS",
    grade:3.9,
    skills:["Node","MongoDB"]
  },
  {
    name:"Ali",
    age:24,
    department:"AI",
    grade:2.8,
    skills:["Python"]
  }
])

console.log("---Exercise1---");

db.students.find()

console.log("---Exercise2---");

db.students.find({
name:"Sara"
})

console.log("---Exercise3---");

db.students.find({
department:"CS"
})

console.log("---Exercise4---");

db.students.find({
age:22
})

console.log("---Exercise5---");

db.students.find({},{_id: 0,name: 1, grade: 1})

console.log("---Exercise6---");

db.students.insertOne(
    {name:"Karim",
        age:20,
        department:"IT",
        grade:3,
        skills:[ "HTML" , "CSS" , "JS" ]
    }
)

console.log("---Exercise7---");

db.students.updateOne({name:"Ahmed"},{$set:{grade:4}})

console.log("---Exercise8---");

db.students.updateOne({name:"Mona"},{$inc:{grade:1}})

console.log("---Exercise9---");

db.students.updateOne({name:"Sara"},{$set:{Phone:"01052356147"}})

console.log("---Exercise10---");

db.students.updateOne({name:"Sara"},{$unset:{Phone:""}})

console.log("---Exercise11---");

db.students.updateOne({name:"Mona"},{$push:{skills:"Express"}})

console.log("---Exercise12---");

db.students.updateOne({},{$pull:{skills:"html"}})

console.log("---Exercise13---");

db.students.deleteOne({name:"Karim"})

console.log("---Exercise14---");

db.students.deleteOne({department:"AI"})

console.log("---Exercise15---");

db.students.find()
