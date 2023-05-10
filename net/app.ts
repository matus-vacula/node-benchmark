const net = require('node:net'); 

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        const request = data.toString();
        console.log(new Date().toISOString() + ' request');
        
        if (request.startsWith('POST /segment')) {
            const response = 'HTTP/1.1 200 OK\r\n\r\n';
            socket.write(response);
            socket.end();
        }
    });

    socket.on('end', () => {
        console.log('Connection ended');
    });
});

const port = 5500;
server.listen(port, '0.0.0.0', () => {
    console.log(`NET Server is running at http://localhost:${port}`);
});
