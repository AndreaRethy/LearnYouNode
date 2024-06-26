const path = require('node:path');
const fs = require('node:fs');

function listFilesModular(directory, extension, callback) {
    const fileList = []
    fs.readdir(directory, (err, list) => {
        if (err) {
            callback(err, null);
            return;
        } 
        list.forEach(file => {
            // get extension
            const fileExtension = path.extname(file);
    
            if (('.' + extension) == fileExtension){
                fileList.push(file);
            }
        });
        callback(null, fileList);
    });
}

module.exports = listFilesModular