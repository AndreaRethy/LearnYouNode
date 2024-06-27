const fs = require('node:fs');
const http = require('node:http');
const portNumber = process.argv[2];

//fs.createReadStream()

const server = http.createServer((req, res) => {
    console.log('reqest received');
    res.end('Hola mundo');
});

server.listen(portNumber, () => {
    console.log(`server listening on port http://localhost:${portNumber}`)
});