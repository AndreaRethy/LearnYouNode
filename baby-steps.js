// Create funtion to add 2 numbers
// function sum (a, b) {
//     c = parseInt(a);
//     d = parseInt(b)
//     return c + d;
// }
// console.log(sum(process.argv[2], process.argv[3]))

// Create a function to add 1 or more numbers
function sumVarious (...args) {
    let result = 0;
    for (let i = 2; i < args.length; i++) {
        num = parseInt(args[i])
        result += num;
    }
    return result;
}

console.log(sumVarious(...process.argv));