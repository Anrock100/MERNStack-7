var lib = require("./functions");
// console.log("Hello world of JS");
//How to call myFunction() of functions.js

// lib.f1();
// console.log(lib.f2(34, 21));
// let n1 = 34;
// let n2 = 32;
// let n3 = 33;
// let result = lib.f2(lib.f2(n1, n2), n3)
// console.log(result);

// let result2 = lib.f3(5,6,7,8,9,10); //sum of them
// console.log(result2);

var values = process.argv;
// console.log(values);
console.log(typeof values[2]);
console.log(typeof values[3]);
var num2=Number(values[2]);
var num3=Number(values[3]);
console.log(typeof num2);
console.log(typeof num3);
var result = lib.f2(num2, num3);
console.log(result);

// console.log(num3);






