// ####### ForEach start her

// const arr = [1, 2, 3];
// // arr.forEach((val, i, arr) => console.log(val, i, arr));
// function halfArr(arr) {
//   let newarr = [];
//   arr.forEach((val) => newarr.push(val / 2));
//   return newarr;
// }

// console.log(halfArr([2, 4, 6]));

// function doublevalue(arr) {
//   let newarr = [];
//   arr.forEach((val) => newarr.push(val * 2));
//   return newarr;
// }

// console.log(doublevalue([2, 4, 6]));

// function evenNo(arr) {
//   let newarr = [];
//   arr.forEach((val) => {
//     if (val % 2 === 0) {
//       newarr.push(val);
//     }
//   });
//   return newarr;
// }

// console.log(evenNo([2, 4, 15]));

// const ReturnFirstAndLastCharector = (arr) => {
//   const newarr = [];
//   newarr.push(arr[0] + arr[arr.length - 1]);
//   return newarr[0];
// };
// // ReturnFirstAndLastCharector("harish");
// console.log(ReturnFirstAndLastCharector("harish"));

// function showfirstAndLast(arr) {
//   var newArr = [];
//   arr.forEach((val) => newArr.push(val[0] + val[val.length - 1]));
//   return newArr;
// }

// console.log(showfirstAndLast(["harish", "kumar"]));

function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeious";
  splitArr.forEach((val) => {
    if (vowels.indexOf(val.toLowerCase()) !== -1) {
      if (val in obj) {
        obj[val]++;
      } else {
        obj[val] = 1;
      }
    }
  });
  return obj;
}

// ####### ForEach ends her
