var s = new Set();
s.add(10);
s.add(20);
s.add(10);
console.log(s, s.size);

var s2 = new Set([1, 2, 3, 2, 3, 1]);
console.log(s2);

console.log(s.has(10));
console.log(s.delete(10));
console.log(s.has(10));
