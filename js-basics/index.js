// Exercise 3
// Add Error handling

const numbers = [1, 2, 3, 4, 2, 2];

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error( 'Value is not a array');
    return array.reduce((count, currentValue) => { 
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        return count + occurrence;
    }, 0); 

}

try {
    const count = countOccurrences(false, 2);
    console.log(count);
}
catch(e) {
    console.log(e.message);
}
