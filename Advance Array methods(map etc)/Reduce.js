// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((acc, prev, i, arr) => {
//   return acc + prev;
// }, 10);

// console.log(result);

// const arr = ["harish", "sandeep", "Ganeshyam"];
// const res = arr.reduce((acc, val, i, arr) => {
//   if (i === arr.length - 1) {
//     return acc + val + ".";
//   }
//   return acc + val + " ";
// }, "The close friends are : ");
// console.log(res);

// const arr = [9, 0, 6, 3, 4, 8, 8, 4, 4, 6];
// const res = arr.reduce((acc, next) => {
//   if (next in acc) {
//     acc[next]++;
//   } else {
//     acc[next] = 1;
//   }
//   return acc;
// }, {});

// console.log(res);

// var arr = [5, 4, 1, 4, 5];

// let res = arr.reduce(function (accumulator, nextValue) {
//   if (nextValue in accumulator) {
//     accumulator[nextValue]++;
//   } else {
//     accumulator[nextValue] = 1;
//   }
//   return accumulator;
// }, {});

// console.log(res);

// const arr = [1, 2, 3, 4, 5];

// function someOfOddNo(arr) {
//   return arr.reduce((acc, next) => {
//     if (next % 2 !== 0) {
//       return (acc += next);
//     }
//     return acc;
//   }, 0);
// }
// console.log(someOfOddNo(arr));

// const arr = [
//   {
//     first: "harish",
//     last: "kumar",
//   },
//   {
//     first: "naveen",
//     last: "kumar",
//   },
//   {
//     first: "satish",
//     last: "kumar",
//   },
// ];

// function createFullName(arr) {
//   return arr.reduce((acc, next) => {
//     acc.push(next.first + " " + next.last);
//     return acc;
//   }, []);
// }
// console.log(createFullName(arr));

// Vowel count
function vowelCount(str) {
  const vowel = "aeious";
  return str.split("").reduce((acc, next) => {
    if (vowel.indexOf(next.toLowerCase()) !== -1) {
      if (next in acc) {
        acc[next]++;
      } else {
        acc[next] = 1;
      }
    }
    return acc;
  }, {});
}

console.log(vowelCount("harish"));
