console.log("---Exercise6---");

const student = require('./student');

console.log(student.studentName);
console.log(student.studentAge);
console.log(student.studentTrack);

const{studentName:stdname,studentAge:stdAge,studentTrack:studentTrack}=student;

console.log(stdname);
console.log(stdAge);
