// console.log("Hello World!");

// Adding Elements To An Array
// This is done by using the push method. This method adds the element(s) to the end of the array
// const numbers = [3,4];

// numbers.push (5,6)  // Adding multiple elements
// numbers.push (7)


// Use unshift method to add elements to the beginning of the array
// numbers.unshift (1, 2)

// console.log(numbers);

// TO add, replace or remove elements at the  middle or any position of an array we use the splice method

const months = ['Jan', 'March', 'April', 'June']
console.log(months);
months.splice (1, 0, 'Feb');  //1 = start position, 0 = delete count (zero means delete nothing), Feb = the element added
//inserts at index 1
console.log(months); 
// Expected output: Array ['Jan', 'March', 'April', 'June']

months.splice(4, 1, 'May', 'Aug');
// replaces 1 element at index 4
console.log(months);

months.splice(4, 2, 'July' );
//deletes elemets at index 4 and 5 and adds July at index 4
console.log(months);

// Finding Elements in An Array
// The indexOf() method is used. And this also depends on wether you are dealing with primitives or reference types.
const numbero = [1, 2, 3, 4];
console.log(numbero.indexOf('b')); 

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('tony'));

const numbers = [1, 2, 3, 4];

console.log(numbers.indexOf('a'));


// lastindexOf method - used to return the last index of a given element or -1 if it doesn't exist
const counters = [1, 2, 3, 3, 4, 3, 5, 6];
console.log(counters.lastIndexOf(3));  //this should return 5

// NB : To check if a given element eg number, exists in an array, do the below:

const cart = [1, 2, 3, 1, 4];
console.log(cart.indexOf(5) !== -1);

// A better way of checking is by using the includes() method
console.log(cart.includes('RoseMary'));


// Using the second parameter of the indexOf methods
const azidaji = [1, 2, 3, 4, 5];
console.log(azidaji.indexOf(2, 1));

// Finding an element (reference type). 
// Use the find() method
// Example1
const courses = [
    {id: 1, name: 'mth101'},
    {id: 2, name: 'chm101'},
];
const course = courses.find(function(course){
    return course.name === 'mth101'
});

console.log(course);

// TO find the index of an element in an array, we use the findIndex() method
const coursay = courses.findIndex(function(coursay){
    return coursay.name === 'xyz'
});
console.log(coursay);

// Example 2
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);
console.log(found);

// Predicate function vs Arrow function

const students = [
    {name: 'Joshua', gender: 'Male', age: 45},
    {name: 'Faith', gender: 'Female', age: 24},
    {name: 'Gloria', gender: 'Female', age: 31}
];

// predicate function
// const student = students.find(function(student){
    // return student.name ===  'Joshua'
// });

// Arrow function
// const student = students.find(student => {
//     return student.name
// })

// Since our function is a one-liner, we can further modify the syntax as below:
const student = students.find(student => student.name === 'Gloria');

console.log(student);


// REMOVING ELEMENTS
// pop() method // to remove element form the end of an array

const numerals = [1, 2, 3, 4, 5];
numerals.pop();
console.log(numerals.pop());
console.log(numerals);

// shift() method  // to remove element from the beginning of an array
console.log(numerals.shift());

// splice()  // used to remove or element(s) from/to an array
const list = ['rice', 'beans', 'garri', 'milk', 'milo', 'handset'];
list.splice(2, 1);
list.splice(3, 0, 'Bornvita');
console.log(list);


// EMPTYING AN ARRAY
// There ae 4 ways to do this

// 1. REassign the array  to an empty array
// To use this, the variable declaration must be the let keyword.
// Also, not to be used if another object is pointing to the same array

let musicalInstruments = ['keyboard', 'guitar', 'maracas'];
let melodyInstruments = musicalInstruments;

musicalInstruments = [];
console.log(musicalInstruments);
console.log(melodyInstruments);

// 2. Set the length of the array to zero

musicalInstruments.length = 0;

console.log(musicalInstruments);
console.log(melodyInstruments);

// 3. Use of the splice method
musicalInstruments.splice(0, musicalInstruments.length);
console.log(musicalInstruments);

// 4. Use the pop method
// the while loop is used here  // very bad idea for large arrays


// COMBINING AND SLICING ARRAYS
// The concat() method is used to combine arrays. It takes the value of the first array and
// the second and add them to a new array. Thus, the initial arrays remain intact.

const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];

const combinedArray = firstArray.concat(secondArray);

console.log(combinedArray);
console.log(firstArray);
console.log(secondArray);


// SLICING
// The slice method is used to return a copy of an array. It has a start and end value. It can also
// use negative indexing

// Primitive Slicing
const slice = combinedArray.slice(2, 5);
console.log(slice);   //returns [3, 4, 5]

// Reference type slicing
const books = [{id: 1}];
const titles = ['Think Twice', 'Great Nigeria', '5am Club'];

const library = books.concat(titles);

console.log(library);

