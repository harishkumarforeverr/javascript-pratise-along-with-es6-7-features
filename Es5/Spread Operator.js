const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

// console.log(...arr1, ...arr2, ...arr3);
// console.log([...arr1, ...arr2, ...arr3]);

// console.log(Math.max(arr1));
// console.log(Math.max.apply(this, arr1));
// console.log(Math.max(...arr1));

function add(a, b) {
  console.log(a + b);
}

add.apply(this, arr1);

add(...arr1);
