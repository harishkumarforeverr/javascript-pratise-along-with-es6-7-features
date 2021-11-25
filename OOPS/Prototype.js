// function Person(name) {
//   this.name = name;
// }

// console.log(Person.prototype);

// var ellie = new Person("harish");
// var colt = new Person("Colt");

// console.log(ellie.__proto__ == Person.prototype);

// console.log(Person.prototype.constructor === Person);

// function Person(name) {
//   this.name = name;
// }

// var ellie = new Person("harish");
// var colt = new Person("Colt");

// Person.prototype.isInstrutor = true;

// console.log(ellie.isInstrutor);
// console.log(colt.isInstrutor);

// function Person(name) {
//   this.name = name;
//   this.sayHi = function () {
//     console.log("hi ra ", this.name);
//   };
// }

// const obj = new Person("harish");
// obj.sayHi();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log("hi ra ", this.name);
// };

// const obj = new Person("harish");
// obj.sayHi();

// function Person(fname, lname) {
//   this.fname = fname;
//   this.lname = lname;
// }
// Person.prototype.sayHi = function () {
//   console.log("hello", this.fname, this.lname);
// };

// function Student(fname, lname) {
//   return Person.call(this, arguments);
// }

// Student.prototype = Person.prototype;

// var ellie = new Person("harish", "kumar");

// ellie.sayHi();

// Student.prototype.status = function () {
//   console.log("ok im a student ow");
// };

// var personobj = new Person("lavanya", "sweety");

// personobj.status();

// // explaination
// var obj1 = { name: "harish" };
// var obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
// obj2.name = "king";
// console.log(obj1);
// console.log(obj2);

function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
Person.prototype.sayHi = function () {
  console.log("hello", this.fname, this.lname);
};

function Student(fname, lname) {
  return Person.call(this, arguments);
}

Student.prototype = Object.create(Person.prototype);

var ellie = new Person("harish", "kumar");

ellie.sayHi();

Student.prototype.status = function () {
  console.log("ok im a student ow");
};

var personobj = new Person("lavanya", "sweety");

// personobj.status();

console.log(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
