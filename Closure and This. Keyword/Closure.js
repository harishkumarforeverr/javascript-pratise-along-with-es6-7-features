// function outer() {
//   const start = "clousure";
//   return function inner() {
//     return start + " " + "awesome";
//   };
// }
// function outer(a) {
//   return function inner(b) {
//     return a + b;
//   };
// }

// function outer() {
//   const outerArg = "something of the outer arg";
//   const remberme = "REmenber me ok na";
//   return function inner() {
//     debugger;
//     return remberme;
//   };
// }

// function Count() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// // }
// function outer() {
//   const instructor = ["harish", "sai"];
//   return function inner() {
//     return {
//       getInstr: function () {
//         return instructor;
//       },
//       addInstr: function (val) {
//         return instructor.push(val);
//       },
//     };
//   };
// }
// }
function outer() {
  const instructor = ["harish", "sai"];
  return function inner() {
    return {
      getInstr: function () {
        return instructor.slice();
      },
      addInstr: function (val) {
        instructor.push(val);
        return instructor.slice();
      },
    };
  };
}
