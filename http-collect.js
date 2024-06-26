const http = require('node:http');
const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf-8');
    let rawData = '';
    let counter = 0;
    res.on('data', (chunk) => { 
        counter += chunk.length;
        rawData += `${chunk}`; 
    });
    res.on('end', () => {
        console.log(counter)
        console.log(rawData)
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});