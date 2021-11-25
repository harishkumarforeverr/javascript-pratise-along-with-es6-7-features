// async function f1() {
//   return "harish is learning";
// }

// f1().then((data) => console.log(data));

// async function getMovieData() {
//   console.log("starting!");
//   debugger;
//   var movieData = await $.getJSON(
//     "https://omdbapi.com?t=titanic&apikey=thewdb"
//   );
//   // this line does NOT run until the promise is resolved!
//   debugger;
//   console.log("all done!");
//   debugger;
//   console.log(movieData);
//   debugger;
// }

// getMovieData(); // logs an object with data about the movie!

// var movieCollector = {
//   data: "titanic",
//   async getMovie() {
//     var response = await $.getJSON(
//       `https://omdbapi.com?t=${this.data}&apikey=thewdb`
//     );
//     console.log(response);
//   },
// };

// movieCollector.getMovie();

// class MovieData {
//   constructor(name) {
//     this.name = name;
//   }
//   async getMovie() {
//     var response = await $.getJSON(
//       `https://omdbapi.com?t=${this.name}&apikey=thewdb`
//     );
//     console.log(response);
//   }
// }

// var m = new MovieData("shrek");
// m.getMovie();

// async function getUser(user) {
//   try {
//     var response = await $.getJSON(`https://api.github.com/users/${user}`);
//     console.log(response.name);
//   } catch (e) {
//     console.log("User does not exist!");
//   }
// }

// getUser("elie"); // Elie Schoppik

// getUser("foo!!!"); // User does not exist!

// SEQUENTIAL NOT PARALLEL
// async function getMovieData() {
//   var responseOne = await $.getJSON(
//     `https://omdbapi.com?t=titanic&apikey=thewdb`
//   );
//   var responseTwo = await $.getJSON(
//     `https://omdbapi.com?t=shrek&apikey=thewdb`
//   );
//   console.log(responseOne);
//   console.log(responseTwo);
// }

// getMovieData();

// MUCH FASTER!
// async function getMovieData() {
//   var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
//   var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

//   var titanicData = await titanicPromise;
//   var shrekData = await shrekPromise;

//   console.log(titanicData);
//   console.log(shrekData);
// }

// getMovieData();

async function getMovieData(first, second) {
  var moviesList = await Promise.all([
    $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
    $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`),
  ]);
  console.log(moviesList[0].Year);
  console.log(moviesList[1].Year);
}

getMovieData("shrek", "blade");

// 2001
// 1998
