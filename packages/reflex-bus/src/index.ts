import Fastify from 'fastify';

const fastify = Fastify();

fastify.post('/event', async (request, reply) => {
  // Simulate event bus publish
  return { message: 'Event published', input: request.body };
});

fastify.get('/health', async () => ({ status: 'ok', service: 'reflex-bus' }));

fastify.listen({ port: 3007 }, (err, address) => {
  if (err) throw err;
  console.log(`Reflex Bus service listening at ${address}`);
});
