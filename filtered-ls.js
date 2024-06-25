const path = require('node:path');
const fs = require('node:fs');

const extension = process.argv[3]
const directory = process.argv[2]

fs.readdir(directory, (err, list) => {
    if (err) {
        console.error('Error: ', err);
        process.exit(1);
    }
    list.forEach(file => {
        // get extension
        const fileExtension = path.extname(file);

        if (('.' + extension) == fileExtension){
            console.log(file);
        }
    });
});