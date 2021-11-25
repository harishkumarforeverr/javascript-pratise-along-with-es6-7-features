function f1() {
  return arguments;
}

// // console.log(f1().push("name"));
// console.log(typeof f1());
// console.log(Array.isArray(f1()));

// const arr = [].slice.call(f1());

// console.log(arr.push("name"));
// console.log(arr);
// console.log(typeof arr);
// console.log(Array.isArray(arr));

const arr = Array.from(f1());

console.log(arr.push("name"));
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));
