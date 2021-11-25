var firstMap = new Map();
firstMap.set(1, "harish");
firstMap.set(false, "boolean");
firstMap.set("nice", "string");
firstMap.delete("nice");
firstMap.size;

var arr = [];
firstMap.set(arr, [1, 2, 3, 34]);
var obj = {};
firstMap.set(obj, {
  a: 1,
});
for (let val of firstMap) {
  console.log(val);
}
console.log(firstMap.values(), firstMap.keys());
firstMap.forEach((v) => console.log(v));
