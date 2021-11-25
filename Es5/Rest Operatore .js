function f1(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(arguments);
  console.log([].slice.call(arguments));
}

f1(1, 2, 3, 4, 5, 6, 7, 8);

var sumArg = (...args) => args.reduce((acc, next) => acc + next);

console.log(sumArg(1, 2, 3, 4, 5));
