const http = require('node:http');
const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf-8');
    let rawData = '';
    res.on('data', (chunk) => { 
        if (chunk != '') {
            rawData += `${chunk}\n`; 
        }
    });
    res.on('end', () => {
        console.log(rawData)
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});