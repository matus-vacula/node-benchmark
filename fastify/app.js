"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
var server = (0, fastify_1["default"])();
var port = 5500; // you can use any port number
server.post('/segment', function (request, reply) {
    // console.log(request);
    reply.code(200).send();
});
server.listen(port, '0.0.0.0', function (err, address) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("Fastify Server is running at ".concat(address));
});
