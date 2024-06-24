const fs = require('node:fs');
const file = process.argv[2];
let counter = 0;

function countLinesAsync(file) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error: ', err);
            return;
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i] == '\n') {
                counter++;
            }
        }
        console.log(counter);
    });
    
}

countLinesAsync(file);

// function callback (err, data) { /* ... */}