//Immediately-invoked Function Expressions are just functions that are immediately executed.

(function() {
console.log("hello");
})(); // this is the IIFE

console.log("hi");

//output would be hello followed by hi, the fuction was executed first.
