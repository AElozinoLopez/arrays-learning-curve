// console.log("Hello World!");

// Adding Elements To An Array
// This is done by using the push method. This method adds the element(s) to the end of the array
const numbers = [3,4];

numbers.push (5,6)  // Adding multiple elements
numbers.push (7)


// Use unshift method to add elements to the beginning of the array
numbers.unshift (1, 2)

console.log(numbers);

// TO add, replace or remove elements at the  middle or any position of an array we use the splice method

const months = ['Jan', 'March', 'April', 'June']
months.splice (1, 0, 'Feb');  //1 = start position, 0 = delete count (zero means delete nothing), Feb = the element added
//inserts at index 1
console.log(months);
