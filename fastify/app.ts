import fastify from 'fastify';

const server = fastify();
const port = 5500; // you can use any port number

server.post('/segment', (request, reply) => {
    console.log(new Date().toISOString(), 'request');
    reply.code(200).send();
});

server.listen(port, '0.0.0.0', (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Fastify Server is running at ${address}`);
});
