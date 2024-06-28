const http = require('node:http');
const portNumber = process.argv[2];
// let time;

const server = http.createServer((req, res) => {
    if (req.url === `/api/parsetime?iso=`) {
        res.writeHead(200, {'Content-Type': 'application/json'});

        const isoTime = {
            "hour": 14,
            "minute": 23,
            "second": 15
        };

        res.write(JSON.stringify(isoTime));
        res.end();

    } else if (req.url === `/api/unixtime?iso=`) {
        res.writeHead(200, {'Content-Type': 'application/json'});

        const unixTime = { 
            "unixtime": 1376136615474
        };

        res.write(JSON.stringify(unixTime));
        res.end();

    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h1>Current time: time here</h1>`)
    }
    
});

server.listen(portNumber, () => {
    console.log(`server listening on port http://localhost:${portNumber}`)
});