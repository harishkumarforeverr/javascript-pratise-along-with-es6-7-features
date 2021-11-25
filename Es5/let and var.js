// // let vs const HOSTING problem

// function f1() {
//   return a;
//   var a = "harish";
// }

// console.log(f1());

// function f2() {
//   return a;
//   let a = "harish";
// }

// console.log(f2());

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
