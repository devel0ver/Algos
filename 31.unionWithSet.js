var a = [34, 35, 45, 48, 49];
var b = [48, 55];
var union = [...new Set([...a, ...b])];
console.log(union);