// var instructor = {
//   firstname: "Elie",
//   sayHi: function () {
//     setTimeout(function () {
//       console.log("hi hahahah ", this.firstname);
//     }, 1000);
//   },
// };

// instructor.sayHi();

// var instructor = {
//   firstname: "Elie",
//   sayHi: function () {
//     setTimeout(
//       function () {
//         console.log("hi hahahah ", this.firstname);
//       }.bind(this),
//       1000
//     );
//   },
// };

// instructor.sayHi();

// var instructor = {
//   firstname: "Elie",
//   sayHi: function () {
//     setTimeout(() => {
//       console.log("hi hahahah ", this.firstname);
//     }, 1000);
//   },
// };

// instructor.sayHi();

var instructor = {
  firstname: "Elie",

  sayHi: () => {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log("hi hahahah ", this.firstname);
    }, 1000);
  },
};

instructor.sayHi();
