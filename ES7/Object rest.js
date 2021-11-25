const obj = {
  fname: "harish",
  a: "1",
  b: "2",
  c: "3",
};

const { fname, a, ...rest } = obj;
console.log(fname, a, rest);

const obj2 = { ...obj, fname: "neha" };
console.log(obj2);
