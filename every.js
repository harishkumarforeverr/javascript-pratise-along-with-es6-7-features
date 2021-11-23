// function Zero(arr) {
//   return arr.every((val) => {
//     console.log(val);
//     return val < 0;
//   });
// }

// function GreaterThan2(arr) {
//   return arr.every((val) => {
//     console.log(val);
//     return val > 2;
//   });
// }

// console.log(Zero([-1, -2, -4]));
// console.log(GreaterThan2([1, 2, 3, 4]));

// function AllowerCase(arr) {
//   return arr.split("").every((val) => {
//     console.log(val);
//     return val === val.toLowerCase();
//   });
// }

// console.log(AllowerCase("harish kumar"));
// console.log(AllowerCase("harish Kumar"));

// function ISARRAY(arr) {
//   return arr.every((val) => {
//     console.log(val, Array.isArray(val));
//     return Array.isArray(val);
//   });
// }

// console.log(ISARRAY([[1, 2], [3, 4], [["1,2,3"]], ["ok"], "haha"]));

// function hasZero(num) {
//   return num
//     .toString()
//     .split("")
//     .some((val) => val === "0");
// }
// console.log(hasZero(1234455));
// console.log(hasZero(1230455));

// function hasDuplicate(str) {
//   return str.split("").every((val, i, arr) => {
//     return arr.indexOf(val) == arr.lastIndexOf(val);
//   });
// }
// console.log(hasDuplicate("harish"));

// const obj = {
//   name: "harish",
//   age: "21",
// };

// console.log("age" in obj);
