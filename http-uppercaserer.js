const http = require('node:http');
const map = require('through2-map');
const portNumber = process.argv[2];


const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        res.writeHead(200, {'Content-Type': 'text/plain'});

        req.pipe(map((chunk) => {
            return chunk.toString().toUpperCase()
        })).pipe(res)
    } else {
        //method not allowed
        res.writeHead(405)
    }
});

server.listen(portNumber, () => {
    console.log(`server listening on port http://localhost:${portNumber}`)
});