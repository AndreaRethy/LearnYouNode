const fs = require('node:fs');
const file = process.argv[2];
let counter = 0;

const text = fs.readFileSync(file, 'utf-8');
for (let i = 0; i < text.length; i++) {
    if (text[i] == '\n') {
        counter++;
    }
}
console.log(counter);