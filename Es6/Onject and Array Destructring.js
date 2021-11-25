// // const arr = {
// //   fname: "haris",
// //   age: 21,
// // };
// // const { fname, age } = arr;
// // console.log(fname, age);

// // const arr = [1, 2, 3, 4];
// // const [a, b, c] = arr;
// // console.log(a, b, c);

// // const arr = {
// //   fname: "haris",
// //   age: 21,
// // };
// // const { fname: f, age: a } = arr;
// // console.log(f, a);

// // function createInstr(options) {
// //   var options = options || {};
// //   // debugger;
// //   var name = options.name ? options.name : { fname: "harish", lname: "kalyan" };
// //   // debugger;
// //   var isOk = options.isOk || false;
// //   // debugger;
// //   console.log(name.fname, name.lname, isOk);
// //   // debugger;
// // }

// // createInstr();
// // createInstr({ isOk: true });
// // createInstr({
// //   name: { fname: "honey", lname: "neha" },
// // });

// // function createInstructor(options) {
// //   var options = options || {};
// //   var name = options.name || { first: "Matt", last: "Lane" };
// //   var isHilarious = options.isHilarious || false;
// //   // return [];
// //   console.log(name.first, name.last, isHilarious);
// // }
// // createInstructor(); // ["Matt", "Lane", false]
// // createInstructor({ isHilarious: true }); // ["Matt", "Lane", true]
// // createInstructor({ name: { first: "Tim", last: "Garcia" } }); // ["Tim", "Garcia", false]

// function createInstr({
//   name = { fname: "harish", lname: "neha" },
//   isOk = false,
// } = {}) {
//   console.log(name.fname, name.lname, isOk);
// }

// createInstr();
// createInstr({ isOk: true });
// createInstr({
//   name: { fname: "honey", lname: "swetha" },
// });

// function displayInfo({ name, age }) {
//   console.log(name, age);
// }
// var obj = { name: "harish", age: "21" };

// displayInfo(obj);

const arr = [1, 2];
console.log(arr);
[a, b] = arr;
[b, a] = [a, b];
console.log([a, b]);
