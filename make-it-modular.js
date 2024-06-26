const mymodule = require('./mymodule.js');

const extension = process.argv[3]
const directory = process.argv[2]

mymodule(directory, extension, (err, files) => {
    if (err) {
        console.error('Error: ', err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    });
})