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

