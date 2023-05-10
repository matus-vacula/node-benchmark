var net = require('node:net');
var server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        var request = data.toString();
        console.log(new Date().toISOString() + ' request');
        if (request.startsWith('POST /segment')) {
            var response = 'HTTP/1.1 200 OK\r\n\r\n';
            socket.write(response);
            socket.end();
        }
    });
    socket.on('end', function () {
        console.log('Connection ended');
    });
});
var port = 5500;
server.listen(port, '0.0.0.0', function () {
    console.log("NET Server is running at http://localhost:".concat(port));
});
