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
// this returns: [{id: 1}, 'Think Twice', 'Great Nigeria', '5am Club']

const sliceLibrary = library.slice();

books[0].id = 8;

console.log(library);
console.log(sliceLibrary);


// THE SPREAD OPERATOR
// This is used to combine arrays, combine and add new elements to a new array, and 'clone' an array"
const spreadOnLibrary = [...books, 'Gifts of The Spirit', ...titles];
console.log(spreadOnLibrary);

const spreadOnLibraryNew = [...spreadOnLibrary];
console.log(spreadOnLibraryNew);


// ITERATING AN ARRAY
// We can use the for...of loop
const banks = ['gtb', 'uba', 'fcmb'];

// using for...of loop
for (let bank of banks) {
    console.log(bank)
}

// using the forEach method
banks.forEach(function(bank) {
    console.log('using forEach', bank)
})

// using arrow function on the forEach 
banks.forEach((bank) => console.log(bank));

// NB: the forEach loop also takes a second parameter called index which returns the index of the 
// elements alongside the properties.

banks.forEach((bank, index) => console.log(index, bank));

// Using the for...of loop doesn't give the index. To get the index, use the for...in loop


// JOINING ARRAYS
// The join() method is used to join arrays. It takes a separator 

const alphabets = [2,3,4,5,6,7];

// const joinedAlphabets = alphabets.join('-');
// console.log(joinedAlphabets);

// SPLIT METHOD
// The split() method is not an array method but a string method
// The split method returns an array

// const split = alphabets.split('');
// console.log(split);

// Using another array to test the split method
const test = "The TypeError: split is not a function occurs if we call a split() method on the value that is not of a type string.";


console.log(test);

const splitTest = test.split(' ');
console.log(splitTest);

const joinTest = splitTest.join('%');
console.log(joinTest);

// NB: The "TypeError: join is not a function" occurs when we call the
// join() method on a value that is not an array. 

// The combination of split and join is mostly used for url slug



const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);


// SORTING ARRAYS
// This is done using the sort() method
// This helps to sort the elements in an array
// For primitives

const sortExample = [3,2,4,1];
sortExample.sort();

console.log(sortExample);

// TO REVERSE the order, we use the reverse method() // 
sortExample.sort().reverse();
console.log(sortExample);


// For Array of objects  // This uses a function that takes two parameters
const theCourses = [
    {id: 1, name: "Node.js"},
    {id: 1, name: "javascript"}
];

theCourses.sort(function(a, b) {  //callback function
    // if a > b return 1
    // if a < b return -1
    // if a === b return 0
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});
console.log(theCourses);

// Using arrow function
theCourses.sort((a,b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
})
console.log(theCourses);


// Sorting an array of objects is case sensitive - refer to ASCII TABLE
// So, if one of the elements is declared in lower case and the other in upper case, 
// to override the case sensitivity when sorting, the below syntax should apply

theCourses.sort((a, b) => {
    const nameA = a.name.toLocaleUpperCase;  //you can also use toLowerCase
    const nameB = b.name.toLocaleUpperCase;  //you can also use toLowerCase

    if(nameA > nameB) return 1;  //descending order sorting. lines 320 and 321 won't be needed
    if(nameA < nameB) return -1; //ascending order sorting. it should be the first if statement. others remain
    return 0;
})
console.log(theCourses);

// if you have more than 2 objects, the parameters still remains (a, b)


// TESTING THEN ELEMENTS OF AN ARRAY
// The every() and some method are used. Very important methods in java script

const testNumbers = [1,2,3];
// testNumbers.every(function(value, index, array){
//     console.log('Value,' value,  'Index,' index, 'Array, ' array);
// });

// To check if all the numbers are positive
const allPositiveNumbers = testNumbers.every(function(value) {
    return value >= 0
});
console.log(allPositiveNumbers);