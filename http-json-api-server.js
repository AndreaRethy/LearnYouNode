const http = require('node:http');
const url = require('node:url');
const portNumber = process.argv[2];

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);

    if (parsedURL.pathname === `/api/parsetime`) {
        res.writeHead(200, {'Content-Type': 'application/json'});

        console.log(parsedURL.query.iso);

        const isoTime = {
            "hour": 14,
            "minute": 23,
            "second": 15
        };

        res.write(JSON.stringify(isoTime));
        res.end();

    } else if (parsedURL.pathname === `/api/unixtime`) {
        res.writeHead(200, {'Content-Type': 'application/json'});

        console.log(parsedURL.query.iso);

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