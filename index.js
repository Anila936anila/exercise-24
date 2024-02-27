"use strict";
// Tests for equality and inequality which strings
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); // False
console.log(str1 !== str2); //True
// Test using the lower case function
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2); // True
// Numerical Testing
const num1 = 10;
const num2 = 5;
console.log(num1 === 2); // False
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
//text using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); // true, both condition are true
console.log(x < y || y > z); // true, at least one
console.log(x > y && y < z); // false both
console.log(x > y || y > z); // false, both conditions are false
// Test whether an item is an array
const fruits = ['apple', 'banana', 'orange', 'grapes'];
console.log(fruits.includes('banana')); //true
console.log(fruits.includes('kiwi')); //false
// Test whether an item is not an array
const colors = ['red', 'yellow', 'green', 'blue'];
console.log(!colors.includes('purple')); //true
console.log(!colors.includes('green')); //false
