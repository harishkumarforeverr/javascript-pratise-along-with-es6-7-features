// const result = [1, 2, 3, 4].some((val) => {
//   console.log("running");
//   return val < 3;
// });

// console.log(result);

// const result = [1, 2, 3, 4].some((val) => {
//   console.log("running");
//   return val > 53;
// });

// console.log(result);

function divBy2(arr) {
  return arr.some((val) => {
    console.log(val);
    return val % 2 == 0;
  });
}
// console.log(divBy2([1, 2, 3, 4, 5]));
// console.log(divBy2([3, 5, 7]));

function HasIndex(str) {
  const splitStr = str.split("");
  return splitStr.some((val) => {
    console.log(val);
    return val === ",";
  });
}

console.log(HasIndex("harish"));

console.log(HasIndex("harish, kumar "));
