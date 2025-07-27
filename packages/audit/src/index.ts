import Fastify from 'fastify';

const fastify = Fastify();

fastify.post('/audit', async (request, reply) => {
  // Simulate audit logging
  return { message: 'Audit logged', input: request.body };
});

fastify.get('/health', async () => ({ status: 'ok', service: 'audit' }));

fastify.listen({ port: 3010 }, (err, address) => {
  if (err) throw err;
  console.log(`Audit service listening at ${address}`);
});
