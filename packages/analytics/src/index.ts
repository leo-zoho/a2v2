import Fastify from 'fastify';

const fastify = Fastify();

fastify.post('/analyze', async (request, reply) => {
  // Simulate analytics processing
  return { message: 'Analytics complete', input: request.body };
});

fastify.get('/health', async () => ({ status: 'ok', service: 'analytics' }));

fastify.listen({ port: 3008 }, (err, address) => {
  if (err) throw err;
  console.log(`Analytics service listening at ${address}`);
});
