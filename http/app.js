const http = require('http');
const port = 5500;

const server = http.createServer((req, res) => {
    if (req.url === '/segment') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!');
        console.log(new Date().toISOString() + ' request');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`HTTP Server running at http://localhost:${port}/`);
});
