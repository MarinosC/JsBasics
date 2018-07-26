// Let vs Var
var color = 'red';
let age = 33;

// var variable is in attached to window object
console.log(window.color); // red

// let variable is not attached to window object
console.log(window.age); // undefined

function sayHi() {
    console.log('hi');
}

window.sayHi();