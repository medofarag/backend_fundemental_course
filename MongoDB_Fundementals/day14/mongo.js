// use libraryDB

db.books.insertMany([
  {
    title: "MongoDB Basics",
    author: "Ahmed Ali",
    price: 300,
    category: "Programming",
    available: true,
    tags: ["MongoDB", "NoSQL", "Database"],
    publisher: {
      name: "ITI Press",
      city: "Cairo",
    },
  },
  {
    title: "JavaScript Advanced",
    author: "Sara Mohamed",
    price: 250,
    category: "Programming",
    available: true,
    tags: ["JavaScript", "ES6"],
    publisher: {
      name: "Tech Books",
      city: "Alex",
    },
  },
  {
    title: "Artificial Intelligence",
    author: "Omar Hassan",
    price: 500,
    category: "AI",
    available: false,
    tags: ["AI", "Machine Learning"],
    publisher: {
      name: "Future Press",
      city: "Cairo",
    },
  },
  {
    title: "Node.js Development",
    author: "Ali Ahmed",
    price: 400,
    category: "Backend",
    available: true,
    tags: ["NodeJS", "Express"],
    publisher: {
      name: "Code House",
      city: "Giza",
    },
  },
  {
    title: "Database Design",
    author: "Mona Ali",
    price: 350,
    category: "Database",
    available: true,
    tags: ["SQL", "MongoDB"],
    publisher: {
      name: "ITI Press",
      city: "Cairo",
    },
  },
]);

console.log("---Exercise1---");

db.books.find();

console.log("---Exercise2---");

db.books.find({ available: true }, {});

console.log("---Exercise3---");

db.books.find({ price: { $gt: 300 } });

console.log("---Exercise4---");

db.books.find({ category: "Programming" });

console.log("---Exercise5---");

db.books.find({}, { _id: 0, title: 1, price: 1 });

console.log("---Exercise6---");

db.books.find({ tags: "MongoDB" });

console.log("---Exercise7---");

db.books.find({ tags: "AI" });

console.log("---Exercise8---");

db.books.updateOne({ title: "MongoDB Basics" }, { $push: { tags: "Backend" } });

console.log("---Exercise9---");

db.books.updateOne(
  { title: "Node.js Development" },
  { $push: { tags: { $each: ["JavaScript", "API"] } } },
);

console.log("---Exercise10---");

db.books.updateOne(
  { title: "Database Design" },
  { $addToSet: { tags: "MongoDB" } },
);

console.log("---Exercise11---");

db.books.updateOne({ title: "Database Design" }, { $pull: { tags: "SQL" } });

console.log("---Exercise12---");

db.books.find({ "publisher.city": "Cairo" });

console.log("---Exercise13---");

db.books.updateOne(
  { title: "JavaScript Advanced" },
  { $set: { "publisher.city": "cairo" } },
);

console.log("---Exercise14---");

db.books.deleteOne({ title: "Artificial Intelligence" });

console.log("---Exercise15---");

db.books.deleteMany({ available: false });

console.log("---Exercise16---");

db.books.aggregate([{ $group: { _id: "$category", count: { $sum: 1 } } }]);

console.log("---Exercise17---");

db.books.aggregate([{ $group: { _id: null, Average: { $avg: "$price" } } }]);

console.log("---Exercise18---");

db.books.aggregate([
  { $group: { _id: null, HigherPrice: { $max: "$price" } } },
]);

console.log("---Exercise19---");

db.books.aggregate([{ $group: { _id: null, LowerPrice: { $min: "$price" } } }]);

console.log("---Exercise20---");

db.books.aggregate([{ $sort: { price: -1 } }]);

console.log("---Exercise21---");

db.books.aggregate([{ $sort: { price: -1 } }, { $limit: 3 }]);
