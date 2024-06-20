// Create funtion to add 2 numbers
function sum (a, b) {
    c = parseInt(a);
    d = parseInt(b)
    return c + d;
}

console.log(sum(process.argv[2], process.argv[3]))