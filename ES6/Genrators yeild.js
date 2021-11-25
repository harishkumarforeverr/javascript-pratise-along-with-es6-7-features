// function* genrators() {
//   for (let i = 1; i <= 5; i++) {
//     yield i;
//   }
// }

// var gen = genrators();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* printValue() {
//   yield "first";
//   yield "second";
//   yield "thord";
// }
// var g = printValue();
// // console.log(g.next());
// // console.log(g.next());
// // console.log(g.next());
// // console.log(g.next());

// for (let val of g) {
//   console.log(val);
// }
function* getMovieData(movieName) {
  console.log("starting");
  yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);

  console.log("ending");
}
var movieGetter = getMovieData("titanic");
// console.log(movieGetter.next());
movieGetter.next().value.then((val) => console.log(val));
