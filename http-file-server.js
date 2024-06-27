const fs = require('node:fs');
const http = require('node:http');
const portNumber = process.argv[2];
const fileLocation = process.argv[3];


const server = http.createServer((req, res) => {
    console.log('reqest received');
    const reader = fs.createReadStream(fileLocation);

    res.writeHead(200, {'Content-Type': 'text/plain'});

    reader.pipe(res);
});

server.listen(portNumber, () => {
    console.log(`server listening on port http://localhost:${portNumber}`)
});