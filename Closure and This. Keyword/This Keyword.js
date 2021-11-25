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

// function addNumber(a, b, c, d) {
//   return this.fname + "  just calculated  " + (a + b + c + d);
// }

// var ellie = {
//   fname: "Ellie ",
// };

// var EllieColt = addNumber.bind(ellie, 1, 2, 3, 4);
// console.log(EllieColt());

// var EllieColt = addNumber.bind(ellie, 1, 2);
// console.log(EllieColt(3, 4));

// ###########################################
// ###########################################
// BIND

// const colt = {
//   fname: "harish",
//   sayHi: function () {
//     setTimeout(function () {
//       console.log("Godd morninng :: ", this.fname, this);
//     }, 2000);
//   },
// };

const colt = {
  fname: "harish",
  sayHi: function () {
    setTimeout(
      function () {
        console.log("Godd morninng :: ", this.fname, this);
      }.bind(this),
      2000
    );
  },
};
// ###########################################

// function House(bedRoom, bathRoom, numSqrt) {
//   this.bedRoom = bedRoom;
//   this.bathRoom = bathRoom;
//   this.numSqrt = numSqrt;
// }

// var fhouse = House(2, 2, 100);
// console.log(fhouse);

// function House(bedRoom, bathRoom, numSqrt) {
//   this.bedRoom = bedRoom;
//   this.bathRoom = bathRoom;
//   this.numSqrt = numSqrt;
// }

// var fhouse = new House(2, 2, 100);
// console.log(fhouse);
// console.log(fhouse.bedRoom);
// console.log(fhouse.bathRoom);
// console.log(fhouse.numSqrt);

// function Dog(name, count) {
//   this.name = name;
//   this.count = count;
//   this.bark = function () {
//     console.log(this.name + " barked " + this.count + " .");
//   };
// }

// var dog1 = new Dog("rusky", 3);
// var dog2 = new Dog("Fido", 1);

// dog1.bark();
// dog2.bark();

function car(make, modal, year) {
  this.make = make;
  this.modal = modal;
  this.year = year;
  this.numWheels = 4;
  // debugger;
}

function MotorCycle1(make, modal, year) {
  // debugger;
  car.call(this, make, modal, year);
  // debugger;
  this.numWheels = 2;
  // debugger;
}

function MotorCycle2(make, modal, year) {
  // debugger;
  car.apply(this, [make, modal, year]);
  // debugger;
  this.numWheels = 2;
  // debugger;
}

function MotorCycle3() {
  // debugger;
  car.apply(this, arguments);
  // debugger;
  this.numWheels = 2;
  // debugger;
}
