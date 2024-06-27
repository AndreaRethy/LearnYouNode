const http = require('node:http');
let urls = [];
let responses = [];
var count = 0;

for (let i = 2; i < process.argv.length; i++){
    urls.push(process.argv[i]);
}

function getData(i) {
    responses[i] = '';
    http.get(urls[i], (res) => {
        res.setEncoding('utf-8');
        res.on('data', (chunk) => { 
            responses[i] += `${chunk}`; 
        });
        res.on('end', () => {
            count++;
            if (count == urls.length) {
                responses.forEach(response => {
                    console.log(response)
                })
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    })
}

for (let i = 0; i < urls.length; i++) {
    getData(i);
}
