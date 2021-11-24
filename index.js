// "use strict";
// const name = "harish";
// function mistake() {
//   this.badIdea = "oops";
// }
// mistake();
// "use strict";
// const name = "harish";
// function mistake() {
//   return this;
// }
// console.log(mistake());

// ###########################################
// ########## Implicity binding this#   ###########

// var Person = {
//   firstName: "harish",
//   sayHi: function () {
//     return "hi " + this.firstName;
//   },
//   determineThis: function () {
//     return this == Person;
//   },
// };

// var Person = {
//   fname: "harish",
//   determine: this,
// };

// var Person = {
//   firstName: "harish",
//   sayHi: function () {
//     return "hi " + this.firstName;
//   },
//   determineThis: function () {
//     return this == Person;
//   },
//   dog: {
//     sayHello: function () {
//       return "hi " + this.firstName;
//     },
//     determineThis: function () {
//       return this == Person;
//     },
//   },
// };

// ###########################################

// ###########################################
// ########## call , apply bind binding this#   ###########
// var HelloColt = {
//   fname: "haish",
//   sayHi: function () {
//     console.log(this.fname + " !!!!!!!!!");
//   },
// };
// var HelloElli = {
//   fname: "Elli",
// };

// HelloColt.sayHi();
// HelloColt.sayHi.call(HelloElli);

// function sayHi() {
//   console.log(this.fname + " !!!!!!!!!");
// }

// var HelloColt = {
//   fname: "haish",
// };
// var HelloElli = {
//   fname: "Elli",
// };

// sayHi.call(HelloColt);
// sayHi.call(HelloElli);

// function sayHi(a, b, c, d) {
//   console.log(this.fname + " !!!!!!!!!", (a = b + c + d));
// }

// var HelloColt = {
//   fname: "haish",
// };
// var HelloElli = {
//   fname: "Elli",
// };

// sayHi.call(HelloColt, 1, 2, 3, 4);
// sayHi.apply(HelloElli, [1, 2, 3, 4]);

// var arr = [1, 25, 43, 24, 5];

// console.log(Math.max(arr));
// console.log(Math.max.apply(this, arr));
// console.log(Math.max(9, 0, 3, 4, 67));

// const values = [4, 1, 2];

// function sumValues(a, b, c) {
//   return a + b + c;
// }

// console.log(sumValues(values));

// console.log(sumValues.apply(this, values));

function addNumber(a, b, c, d) {
  return this.fname + "  just calculated  " + (a + b + c + d);
}

var ellie = {
  fname: "Ellie ",
};

// var EllieColt = addNumber.bind(ellie, 1, 2, 3, 4);
// console.log(EllieColt());

// var EllieColt = addNumber.bind(ellie, 1, 2);
// console.log(EllieColt(3, 4));

// ###########################################
