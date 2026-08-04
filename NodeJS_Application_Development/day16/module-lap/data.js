let name = "Mahmoud";
let age = 20;
let isGraduated = false;
let skills = ["HTML", "CSS", "JavaScript"];
let calculateAge = (birthYear) => {
  return 2026 - birthYear;
};

module.exports.name = name;
module.exports.age = age;
module.exports.isGraduated = isGraduated;
module.exports.skills = skills;
module.exports.calculateAge = calculateAge;
