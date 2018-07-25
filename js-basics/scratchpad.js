// Variables

let name = 'Marinos';
console.log(name);

// Cannot be a reserved keyword
// should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen 
// Are case sensitive

let firstName = 'Marinos';
let  lastName = 'Christoforou';

// Constants

const interestRate = 0.3;
interestRate = 1;  // get exception
console.log(interestRate);

// Primitive(value types)  types
let name = 'Marinos';   // string literal
let age = 50;           // number literal all numbers (integer or float) are always type number
let isApproved = false; // boolean literal
let firstName = undefined; // undefined is a type but also a value
let selectedNumber = null; // clear the value of a variable

console.log(typeof name);

name = 1;
console.log(typeof name);


console.log(typeof age);

age = 50.7;
console.log(typeof name);

console.log(typeof firstName);

// Objects (reference) types

let person = {
    name: 'Marinos',
    age: 56
}; // set to an object literal (curly braces) with one or more key value pairs 

// Dot notation
person.name = 'Diego';

// bracket notation
person['name'] = 'Maria';

//bracket notation can be accessed in a dynamic way
let selection = 'name';
person[selection] = 'Juliana';

console.log(person['name']);

// Arrays - list of objects
let selectedColors = ['red', 'blue']; // square brackets are an array literal
console.log(selectedColors[1]);

// array length is dynamic
selectedColors[2] = 'green';
console.log(selectedColors);

// type of array elements is also dynamic
selectedColors[3] = 2;
console.log(selectedColors);

// an arry is a type of object
console.log(typeof selectedColors);

console.log(selectedColors.length);

// Functions - fundamental building blocks in js
// Performing a task
function greet(name, lastName) {
    // name is a parameter
    // body of the function
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Marinos'); // argument for parameter
greet('Aspasia', 'Theophilipidou');

// calculating a value
function square(number) {
    return number * number;
}

let number = square(3);
console.log(number);

// or 
console.log(square(4));


let x = 10;
let y = 3;

// Operators

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment (++)
// Decrement (--)

console.log(++x);

// strict equality operator (type and value)
console.log(1 === 1);
console.log('1' === 1);

// loose equality operator
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// ternary or condition operator

// For example 
// If a customer has more than 100 points
// they are a 'gold' customer, otherwise
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

//Logical operands
//
//Logical AND (&&)
//Returns true if both operands are true

let highincome = true;
let goodcreditscore = true;
let eligableforloan = highincome && goodcreditscore;
console.log(eligableforloan);

//Logical OR (||)
//Returns true if one of the operands are true
let highincome = true;
let goodcreditscore = false;
let eligableforloan = highincome || goodcreditscore;
console.log(eligableforloan);

//NOT operator (!)
//Reverses the result of the expression
let highincome = true;
let goodcreditscore = false;


let eligableforloan = highincome && goodcreditscore;
let applicationrefused = !eligableforloan;
console.log(applicationrefused);

// Logical operators can be used with non-boolean values

// = true
console.log(false || true); 

// = 'Marinos'
console.log(false || 'Marinos');

// = 1
console.log(false || 1);

// when one of the operands is not a boolean, it tries to evaluate the expression as truthy or falsy

// Falsy (false)

// undefined
// null
// 0
// false
// ''
// NaN (not a number)

// Anything that is not falsy --> Truthy 

// if an operand evaluates to Truthy it will be returned
// If there are more than one operands the first truthy is returned (shirt-circuiting)
console.log(false || 1 || 'Marinos');

// real world example

let usercolor = undefined;
let defaultcolor = green;
let currentcolor = usercolor || defaultcolor;

// Bit wise operators

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 4 = 00000100
// 5 = 00000101
// 6 = 00000110
// 7 = 00000111


console.log(1 | 2); //bitwise OR 

console.log(1 & 2); //bitwise AMD

// Real world example
//read, write, execute
// read 00000100
// write 

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

// Precedence

let x = 2 + 3 * 4
console.log(x); //14

//Exercise swap 
let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

let temp = a;
a = b;
b = temp;


console.log(a);
console.log(b);

// Hour
// If hour is between 6am and 12pm: Good Morning!
// If hour is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

let hour = 22;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning!');
}
else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon!');
}
else {
    console.log('Good Evening!');
}

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

// loops - for statement
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) 
        console.log(i);
}

// loops - while statement
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) 
        console.log(i);
    i++ ;
}

// loops - do while statement

let i = 0;
do {
    if (i % 2 !== 0) 
        console.log(i);
    i++ ;
} while (i <= 5) ;


// loops - infinite loop


let i = 0;
while (i <= 5) {
    console.log(i);
} ;

while (true) {
    console.log('Hello World');
};

do {
    console.log('Hello World');
} while(true);

for (;;) {
    console.log('Hello World');
}

// loops - for in statement
// used to iterate over properties of an object or an array
// can use dot notation person.age
// can also use bracket notation person['age']

const person = {
    name: 'Marinos',
    age: 56
};


for (let key in person) {
        console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log(index, colors[index]);
}

// loops - for of statement
// introduced in ECMA 6,used to iterate over an array
// much better way to loop over an array

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}

// Exercise
// write a function that takes to numbers
// and returns the maximum of the two

function max(x, y) {
    return x > y ? x : y;
}

console.log(max(12, 7));

// Exercise
// write a function that takes two numbers for width and height
// and returns boolean if is landscape

function isLandscape(width, height) {
    return width > height;
}

let landcape =  isLandscape(100, 200)
console.log(landcape);

// Exercise
// write a function for fizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 & 5 => FizzBuzz
// Not Divisible by 3 & 5 => input
// Not a number => 'not a number'

const output = fizzBuzz(false) ;
console.log(output);

function fizzBuzz(number) {
    if (typeof number !== 'number')
        return 'Not a number';

    return number % 15 === 0    ? 'FizzBuzz' 
                                : number % 5 === 0  ? "Buzz" 
                                                    :  number % 3 === 0 ? 'Fizz'
                                                                        :  number;

}
// Exercise
// write a function to check speed and demerit
// Speed limit = 70 
// under the limit (+ 5km) get OK message
// for every 5km above the limit get 1 pt
// use Math.floor()
// if more than 12 pt license is suspended.
function checkSpeed(speed) {
    const limit = 70;
    const ptsEveryExcessKm = 5;
    const suspensionPts = 12;
    let result = 'Ok';
  
    if (speed < limit + ptsEveryExcessKm) {
        console.log(result);
        return;
    }

    let pts = ((speed - (limit + ptsEveryExcessKm)) / ptsEveryExcessKm) + 1;
    result =  pts >= suspensionPts ? 'License suspended' : Math.floor(pts);
    console.log(result);
}

checkSpeed(130);


// Exercise
// show sequence of numbers from 0 up to number passed
// as "EVEN" or "ODD"

function showNumbers(number) {
    for (let i = 0; i<=number; i++)
    {
        console.log(i, i % 2 === 0 ? 'EVEN' : 'ODD' );
    }
}

showNumbers(10);

// Exercise
// count truthy elements in a given array

// Falsy Types (false)
// undefined
// null
// 0
// false
// ''
// NaN (not a number)


function countTruthy(array) {

    let count = 0;
    for (let element of array) {
        if (element)
            count++
    }
    console.log(count);
}

const array = [0, 1, 2, 3, NaN, '', 'Marinos', true, false, undefined, 4];

countTruthy(array);

// Exercise
// show all properties of an object that is a string

const movie = {
    title: 'a',
    releaseYear: 2018,
    genre: 'Horror',
    rating:  3.8,
    director:  'b'
};

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

showProperties(movie);


// Exercise
// show the sum of multiples of 3 and 5 
// for limit of 10
// multiples of 3 are 3, 6, 9
// multiples of 5 are 5, 10
// sum = 33

function sum(limit) {
    let sum = 0;
    
    for (let i = 0; i<=limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
        sum += i;
    }

    return sum;
}

console.log(sum(16));

// Exercise
// Find the average mark of a student and then grade average

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 81];

function calculateGrade(marks) {
    const avgMark = calculateAverage(marks); 
  
    if (avgMark < 60) return 'F';
    if (avgMark < 70) return 'D';
    if (avgMark < 80) return 'C';
    if (avgMark < 90) return 'B';
    return 'A';
}

 function calculateAverage(array) {
    let sum = 0;
  
    for (let value of array) {
        sum += value;
    }
    return sum / marks.length;
 }

 console.log( calculateGrade(marks));

 // Exercise
// show stars with each row displayed having one more star

function showStars(rows) {
    const stars = '*';
    let output = '';
    for (let i = 0; i<rows; i++) {
        output += stars;
        console.log(output);
    }
}// Show the number of stars

showStars(10);

// show primes
//
// prime numbers are divisible by 1 or themselves only

showPrimes(100);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number))console.log(number);
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        }
    }  
    return true;
}

// more objects
// OOP (Object Oriented Programming)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

// factory function
function createCircle(radius) {
    return {
        radius,  // shorthand way of writing when key and value are the same (radius: radius)
        draw() {
            // concise way of defining a function within an object
            console.log('draw', radius);
        }
    };
 }

 const circle1 = createCircle(1);
 console.log(circle1);

 const circle2 = createCircle(3);
 console.log(circle2);

// constructor function
// constructs functions uses camel notation
// uses keyword this which is a reference to the object executing the code

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw', this.radius);
    }
}

 const circle1 = new Circle(2);
 console.log(circle1);

 // object dynamic properties

// a const variable cannot be reassigned but properties can be altered 
const circle = {
    radius: 1
};
circle.color = 'blue';
circle.draw = function() {};

 console.log(circle);
// following not allowed by const keyword => circle = {};


 // Built in functions

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw', this.radius);
    }
}
const another = new Circle(1);

// Every object in JS has a property called constructor 
// The constructor property references the function that 
// was used to construct or create the object.

let x = {}; // Object literal
// internally calls built in function: let x = new Object();

// Other built in functions
new String();   // ''. "", ``
new Boolean();  // true, false
new Number();   // 1, 2, 3


// functions are objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);

//console.log(Circle.constructor)   // displays internal function "Function()"

// The above can be expressed explicitly using Function method: 
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

const circle = new Circle1(3);
console.log(circle.draw())


// functions are objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// functions have some built in methods available

//call method
// thisArg represent the target for this, usually pass an empty object
// after we add arguments explicitly
// Below two lines are equivalent
Circle.call({}, 1)
const another = new Circle(1);

// without the new operator, this will point to global object which is window
Circle.call(window, 1);
const another2 = Circle(1);

// apply method same as call but apply an array instead of explicit parameters

// Value Types

// Number
// String
// Boolean
// Symbol
// undefined
// null


// Reference Types

// Object
// Array
// Function


// define two primitives
let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);

// define a reference type (store in memory)
let v = { value: 10};
let w = v;

v.value = 20;
console.log(v);
console.log(w);

function increaseObj(obj) {
    obj.value++;
}

function increase(number) {
    number++;
}

let number = 10;
increase(number);

console.log(number);

let obj = { value: 10};
increaseObj(obj);

console.log(obj);

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) 
    console.log(key, circle[key]);

    // An object is not iterable => runtime error
    // for (let key of circle) 
    // console.log(key);

for (let key of Object.keys(circle))
    console.log(key);

// internally 
// const x = {value: 1};
// is constructed as follows
// const x = new Object();

 for (let entry of Object.entries(circle))
    console.log(entry);

// To see if an object has a given property or method 
// use the in operator
if ('radius' in circle)
    console.log('Yes');

// Can use object enumeration to clone an object (older way)
const another = {};

for (let key in circle) {
    another[key] = circle[key];
}

console.log(another);

// More recent methods include the Object.assign
const another2 = Object.assign({ color: 'red'}, circle);

console.log(another2);

// Can use a simpler way to clone using the spread operator:

const another3 = { ...circle};

console.log(another3);

// Math

// Random - Helper
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Random integer - Helper
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min; 
  }

console.log( getRandomArbitrary(1, 20));
console.log( getRandomInt(1, 6));

// String Objects

// In JS we have ywo types of strings:
//    string primitive
//    string object

// When using the string . (dot) operator, 
// JS wraps string with string object

// string primitive
const message = 'This is my first message';

// string object
const another = new String('Hi');

console.log(typeof message);

console.log(typeof another);

// get length
console.log(message.length);

// get single character - 'i'
console.log(message[2]);

// find if a substring is contained - true
console.log(message.includes('my'));

const message = 
'This is my\n' + 
'\'first\' message';

console.log(message);

// Template literals

// Literals in JS
// Object {}
// Boolean true, false
// String '', ""
// EM6 - Template literals `` chars before 1 on keyboard

const another = `This is my
'first' message`;

console.log(another);

const name = 'Max';
const message2 = 'Hi ' + name + ',\n';
console.log(message2);

const another2 = 
`Hi ${name},
`;

console.log(another2);

// Dates
const now = new Date();
const date1 = new Date('July 2 2018 20:01');
const date2 = new Date(2018, 3, 6, 9, 0);
console.log(now);
console.log(date1);
console.log(date2);

// Exercise 
// create an address object
// with 3 properties
// street
// city
// zipCode
// also create function that shows all the properties with their values
//
const address = {
    street : 'Kountouriotis',
    city: 'Limassol',
    zipCode: '3077',
};
function ShowAddress() {
    for (const key in address) {
        console.log(key, address[key]);
    }
}

ShowAddress();
// Exercise 
// initialize an address object using first
// a factory method
// then a constructor function

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode 
    };
 }

 const address1 = createAddress('Kountourioti', 'Limassol', '3077');
 console.log(address1);

 // constructor function
// constructs functions uses camel notation
// uses keyword this which is a reference to the object executing the code

function Address(street, city, zipCode) {
    this.street = street;
    this.city= city;
    this.zipCode = zipCode;
}

const address2 = new Address('Kountourioti', 'Limassol', '3077');
 console.log(address2);

// Exercise 
// use the constructor function 
// create two objects
// create two functions 
// AreEqual, check that the two objects are equal
// AreSame, point two the same object

function Address(street, city, zipCode) {
    this.street = street;
    this.city= city;
    this.zipCode = zipCode;
}

const address1 = new Address('Kountourioti', 'Limassol', '3077');

const address2 = new Address('Kountourioti', 'Limassol', '2031');

function AreEqual(address1, address2) {
    for (const key1 in address1) {
        for (const key2 in address2) {
            if (key1 == key2) {
                if (address1[key1] === address2[key2])
                    break;
                else
                    console.log(false);
                    return;
            }
            else
                continue;
        }
    }
    console.log(true);
}

function AreSame(address1, address2) {
    console.log(address1 === address2);
}

AreEqual(address1, address2);
AreSame(address1, address2); 

// Exercise 
// blog post
// object that contains:
//
// title
// body
// author
//views
// comments
//  (author, body)
// isLive
const blogPost = {
    tile: 'a',
    body: 'b',
    author: 'c',
    view: 10,
    comments:[ {
        author: 'd',
        comments: 'e'
    },
    {
        author: 'f',
        comments: 'g'
    }],
    isLive: false
};

console.log(blogPost);

// Exercise 
// blog post using constructor function
// object that contains:
//
// title
// body
// author
//views
// comments
//  (author, body)
// isLive

// constructor function does not need views, doest not need comments or is live
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let blogPost = new Post('a', 'b', 'c');

console.log(blogPost);

// Arrays

const numbers = [5, 6];
console.log(numbers);

// const cannot re=assign a number to a another variable, 
// but is fine to modify contents of this array.

// End
numbers.push(7, 8);
console.log(numbers);

//beginning
numbers.unshift(1, 2);
console.log(numbers);

//middle - params start, no. of elements to delete, items....
numbers.splice(2, 0, 3, 4);
console.log(numbers);

// Arrays

const numbers = [5, 6];
console.log(numbers);

// const cannot re=assign a number to a another variable, 
// but is fine to modify contents of this array.

// End
numbers.push(7, 8);
console.log(numbers);

//beginning
numbers.unshift(1, 2);
console.log(numbers);

//middle - params start, no elements to delete, items....
numbers.splice(2, 0, 3, 4);
console.log(numbers);

// search for an item in an array - returns -1 of item not found
console.log( numbers.indexOf('a'));
console.log( numbers.indexOf(1));
console.log( numbers.lastIndexOf(3));

// for checking if something exists:
console.log( numbers.indexOf(1) !== -1);
console.log( numbers.includes(1));

// can also start search using a position in overload of index of
numbers.splice(4,0,1);
console.log(numbers);
console.log( numbers.indexOf(1));
console.log( numbers.indexOf(1,3));

// Finding reference types

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' }
];

console.log(courses.includes({id: 2, name: 'b'}));

// get false result because they are considered two distinct objects
// need to use the find

// var array1 = [5, 12, 8, 130, 44];

// var found = array1.find(function(element) {
//   return element > 10;
// });

// console.log(found);
// expected output: 12
// find returns the first element that matches or undefined

const course = courses.find(function(course) {
    return course.name == 'b';
});
console.log(course);

// Finding reference types

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' }
];

// in es 6 there is a shorter and clearer way to write a function
// arrow function (=>) like lambda expressions in c#

// remove function keyword
// put a fat arrow between the parameter(s) and body
// if only one parameter can remove parenthesis
// if no parameters need an empty set of parameters
// if the function is a single line and returning a value,
// you can remove the braces and return keyword.

const course = courses.find(course => course.name === 'c');
console.log(course);

// Delete
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

// Reminder to Insert

//End
//numbers.push();

//Start
//numbers.unshift();

//Middle
//numbers.splice();

// For deletion

//End
const last = numbers.pop();
console.log(numbers);
console.log(last);

//Start
const start = numbers.shift();
console.log(numbers);
console.log(start);

//Middle (remove two elements starting from position 2)
numbers.splice(2, 2);
console.log(numbers);

// Emptying an array

let numbers = [1, 2, 3, 4, 5, 6];
let another = numbers;
console.log(numbers);
console.log(another);

// solution 1 re-assign to a new object
// numbers = [];
// console.log(numbers);

// will only work if no other object references the array
//console.log(another);

// solution 2 assign array to zero
// numbers = 0;
// console.log(numbers);
// console.log(another);

// solution 3 use splice method
// numbers.splice(0, numbers.length);
// console.log(numbers);
// console.log(another);

//solution 4 use the pop method
while (numbers.length > 0) {
    numbers.pop();
}
console.log(numbers);
console.log(another);

// combining an array
const first = [1, 2, 3];
const second = [4, 5, 6];

const third = first.concat(second);
console.log(third);

// slicing an array starting after an element until another element
const fourth = third.slice(2, 4);
console.log(fourth);

// slicing an array starting after an element until end of the array
const fifth = third.slice(2);
console.log(fifth);

// copying one array to another
const sixth = third.slice();
console.log(sixth);

// note using these methods primitive values such as numbers are copied
// object values are not copied, their references are copied instead
const obj1 = [{id: 1}, {id: 2}];
const obj2 = [{id: 3}, {id: 4}];

const obj3 = obj1.concat(obj2);
obj1[0].id = 10;

const obj4 = obj3.slice();
console.log(obj3);
console.log(obj4);

//using splice (es 6)

const first = [1, 2, 3];
const second = [4, 5, 6];

const third = first.concat(second);
console.log(third);

// spread syntax note you can add an element as well
const fourth = [...first, 8, ...second];
console.log(fourth);

// to copy using the spread syntax
const copy = [...third];
console.log(copy);

// iterating through the array
const numbers = [1,2,3];

// traditional ways
for (index in numbers) {
    console.log(numbers[index]);
}

for (const number of numbers) {
    console.log(number);
}

// using the foreach method
numbers.forEach(function(number) {
    console.log(number);
});

// this can be shortened using =>
numbers.forEach(number => console.log(number));

// joining an array
const numbers = [1,2,3];
const joined = numbers.join(',');
console.log(joined);

// using split (part of string) 
const message = 'This is my very first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

// sorting arrays 

// for numbers can use default sort method
const numbers = [3,1,4,2];
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// for objects default doesn't work

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'angular' },
    { id: 3, name: 'JavaScript' }
];
console.log(courses);

// doesn't work
courses.sort();
console.log(courses);

// sort takes an argument for a function that can be used for sorting
courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(courses);

// case-insensitive sort 
courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

// in modern JS we have two new methods (every and some)

// To check if numbers in array are positive
const numbers = [-1, -2, 3, -4];

// const allPositive =  numbers.every(function(value) {
//     return value >= 0;
// });

const allPositive =  numbers.every(value => value >= 0); 
console.log(allPositive);

// const somePositive =  numbers.some(function(value) {
//     return value >= 0;
// });

const somePositive =  numbers.some(value => value >= 0);
console.log(somePositive);

// Filter method
// To check if there is a positive number in array
const numbers = [-1, -2, 3, -4];

// const isPositive = numbers.filter(function(value) {
//     return value >= 0;
// });

const isPositive = numbers.filter(value =>  value >= 0);
console.log(filtered);

// To check if there is a positive number in array
const numbers = [1, -2, 3, 4];

const filtered = numbers.filter(value =>  value >= 0);

// Map to string eg. html list
const items = filtered.map( n => '<li>' + n + '</li>');

console.log(filtered);
console.log(items);
const html = '<ul>' + items.join(' ') + '</ul>'; 
console.log(html);

// Map method

// To check if there is a positive number in array
const numbers = [1, -2, 3, 4];

const filtered = numbers.filter(value =>  value >= 0);

// Map to object
const items = filtered.map( n => {
    return {value: n };
});
    
console.log(items);

// using arrow functions get three undefined objects 
// because curly braces define code block
const items2 = filtered.map( n =>  {value: n });
console.log(items2);

// Need to use parenthesis to return objects
const items3 = filtered.map( n => ({value: n }));
console.log(items3);


// methods return a new array and can be chained
const items4 = numbers
    .filter(value => value >= 0)
    .map( n => ({value: n }))
    .filter(obj => obj.value > 1);
console.log(items4);

// Reducing an array

const numbers = [1, -2, 3, 4, -1];

// To calculate the sum of an array
let sum = 0;
for (let n of numbers)
    sum += n;
console.log(sum);

// using reduce method can reduce elements into a single value
const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue ;
}, 0);
console.log(sum2);

// code can be made even shorter
// can remove initializer
// and remove curly braces because there's a single return statement
const sum3 = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue) ;
console.log(sum3);

// Exercise 1 - write a function that creates a range of numbers

function includes(min, max) {
    let numbers = [];
    for(let i = min; i<=max; i++) {
        numbers.push(i);
    }
    return numbers;
}

const numbers = includes(-10, -5);
console.log(numbers);

// Exercise 2 - write a function that is like the include method
const numbers = [1, 2, 3, 4, 5];

function includes(array, searchElement) {
    for (let item of array) {
        if (item === searchElement)
            return true;
    }
    return false;
}
console.log(includes(numbers, 0));

// Exercise 2 - write a function that takes an array
// and returns a new array that excludes any elements 
// that occur in a second array that is passed
const numbers = [1, 2, 3, 4]; 

const output = except(numbers, [1, 2]);

console.log(output); 

function except(array, excluded) {
  const output = []; 
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element); 
  return output; 


// Exercise 4 - write a function that moves an element
// from a given index to a given offset

const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
    const newIndex = index + offset;
    if (newIndex > array.length ||
        newIndex < 0) {
        console.error('Invalid Offset');
        return;
    }
    const output = [...array];
    if (offset != 0) {
        let element = output.splice(index, 1)[0];
        output.splice(newIndex, 0, element);
    }
    return output;
}

const output = move(numbers, 2,  4);
console.log(output);

// Exercise 5 - find the total number of occurrences in an array

const numbers = [1, 2, 3, 4, 2];

function countOccurrencesSimple(array, searchElement) {
    let count = 0;
    for (let n of array) {
        if (n === searchElement) 
            count++ ;
    }
    return count;
}

function countOccurrences(array, searchElement) {
    return array.reduce((count, currentValue) => { 
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        return count + occurrence;
    }, 0); 

}

const count = countOccurrences(numbers, 2);
console.log(count);

// Exercise 6 - Get the maximum number in a given array
// return undefined if no elements in array

const numbers = [1,2,3,7,4];

function getMaxSimple(array) {
    if (array.length === 0)return undefined;

    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) 
            max = array[i];
    }
    return max;
}

function getMax(array, searchElement) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}

const max = getMax(numbers);
console.log(max);

// Exercise 7 - 
// Movies
const movies  = [
    {title: 'a', year: 2018, rating: 4.5 },
    {title: 'b', year: 2018, rating: 4.7 },
    {title: 'c', year: 2018, rating: 3 },
    {title: 'd', year: 2017, rating: 4.5 }
];

// Get all the movies in 2015 with rating > 4
// sort them by their rating in descending order
// display the title property only on the console.

function filterMovies(array) {
    if (array.length === 0) return undefined;

    return array
            .filter( m => m.year === 2018 && m.rating > 4)
            .sort( (a, b) => b.rating - a.rating)
            .map (m => m.title);
}


const filtered = filterMovies(movies);
console.log(filtered);

// Function declarations
function walk() {
    console.log('walk');
}

// Anonymous Function expressions
let run = function() {
    console.log('run');
};
let move = run;
run();
move();

// Hoisting (moving declarations to the top by the JS engine)
// Function declarations can be called before they are defined
//
walk();
function walk() {
    console.log('walk');
}


// Anonymous Function expressions cannot be called before they are defined
run();
let run = function() {
    console.log('run');
};


// Note casll before declaration
walk();

// Function Declaration
function walk () {
    console.log('walk');
}

// Function expression
let run = function() {
    console.log('run');
};
let move = run;
run();
move();

// Declarations can be called before they are defined
// Expressions cannot be called before they are defined
// Function declarations are moved to the top of the file by JS Engine 
// THis is know as hoisting


// Arguments
function sumSimple(a, b)  {
    console.log(arguments); //inherent property arguments
    return a + b;
}
console.log(sumSimple(2,4));      // => 6
console.log(sumSimple(2));        // => NaN (missing argument is undefined)
console.log(sumSimple(2,4,5,6));  // => 6 (extra arguments ignored)

function sum()  {
    let total = 0
    for (const arg of arguments) {
        total += arg;
    }
    return total;
}
console.log(sum());         // => 0
console.log(sum(2,4));      // => 6
console.log(sum(2));        // => 2
console.log(sum(2,4,5,6,10));  // => 17

function sum(a, b) {
    return a + b;
}

// console.log(sum()); => NaN
// console.log(sum(1)); => NaN
// console.log(sum(1,2)); => 3
// console.log(sum(1,2,3)); => 3
// console.log(sum(1,2,3,4)); => 3
// console.log(sum(1,2,3,3,4)); => 3

// use internal object method arguments for a more flexible implementation of sum
// it has an iterator for iterating through all values

function sum() {
    let total = 0;
    for (const arg of arguments) {
        total += arg;
    }
    return total;
}

console.log(sum(1,2,3,4,5));

// console.log(sum()); =>  0
// console.log(sum(1)); =>  1
// console.log(sum(1,2)); =>  3
// console.log(sum(1,2,3)); =>  6
// console.log(sum(1,2,3,4)); =>  10
// console.log(sum(1,2,3,4,5)); =>  15

// Arguments

function sum(a, b) {
    return a + b;
}

// console.log(sum()); => NaN
// console.log(sum(1)); => NaN
// console.log(sum(1,2)); => 3
// console.log(sum(1,2,3)); => 3
// console.log(sum(1,2,3,4)); => 3
// console.log(sum(1,2,3,3,4)); => 3

// use internal object method arguments for a more flexible implementation of sum
// it has an iterator for iterating through all values

function sum() {
    let total = 0;
    for (const arg of arguments) {
        total += arg;
    }
    return total;
}

console.log(sum(1,2,3,4,5));

// console.log(sum()); =>  0
// console.log(sum(1)); =>  1
// console.log(sum(1,2)); =>  3
// console.log(sum(1,2,3)); =>  6
// console.log(sum(1,2,3,4)); =>  10
// console.log(sum(1,2,3,4,5)); =>  15

// The rest operator
// Used in js for variable parameters
// ...args (not to be confused with the spread operator)
// rest operator will take all passed arguments and put them in an array.
function sum(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}
console.log(sum(1,2,3,4,5,10));

// Default parameters


function interest(principal, rate, years) {
    // can use logic or value to provide default values (pre ES 6)
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}

var totInterest = interest(10000);
console.log(totInterest);

// Post EF6
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

var totInterest = interest(10000);
console.log(totInterest);

// Caveat, if you give one paramter a default value, 
// all subsequent parameters will need a default value
// other wise parameter is undefined.
var totInterest = interest(10000);
console.log(totInterest);

// if undefined is passed  for a defaulted parameter, the default will be used
var totInterest = interest(10000, undefined, 5);
console.log(totInterest);

// Getters and Setters

const person = {
    firstName: 'Marinos',
    lastName: 'Christoforou',
    printFullName() {
        return `${person.firstName} ${person.lastName}`
    },
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
       parts = value.split(' ');
       this.firstName = parts[0];
       this.lastName = parts[1];
    }    
};

// Traditionally to display the full name
console.log(person.firstName + ' ' + person.lastName);

// Using template literals to display the full name
console.log(`${person.firstName} ${person.lastName}`);

// Using object function (read-only)
console.log(person.printFullName());

// use getters => access properties
// use setters =< change (mutate) then

// Using getter
console.log(person.fullName);

// Using setter
person.fullName = 'Michael Nicholas';
console.log(person.firstName + ' ' + person.lastName);

// Try Catch 

const person = {
    firstName: 'Marinos',
    lastName: 'Christoforou',
    printFullName() {
        return `${person.firstName} ${person.lastName}`
    },
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string') 
            throw new Error( 'Value is not a string');
            

       const parts = value.split(' ');
       if (parts.length !== 2)
            throw new Error('Enter a first and last name');

       this.firstName = parts[0];
       this.lastName = parts[1];
    }    
};

try {
    person.fullName = '';
}
catch(e) {
    alert(e);
}
console.log(person);

// Local vs Global scope

// When declaring variables with the let or const keywords,
// their scope is limited to the block in which they are defined.

const color = 'red'; //global scope

function scope() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);  // out of scope
}

function start() {
    const message = 'Hi';
    const color = 'blue';
    console.log(color);
}

function stop() {
    const message = 'Bye';
    console.log(color);
}

//scope();
start();
stop();