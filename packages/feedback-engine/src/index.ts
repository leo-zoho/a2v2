import Fastify from 'fastify';

const fastify = Fastify();

fastify.post('/feedback', async (request, reply) => {
  // Simulate feedback processing
  return { message: 'Feedback processed', input: request.body };
});

fastify.get('/health', async () => ({ status: 'ok', service: 'feedback-engine' }));

fastify.listen({ port: 3006 }, (err, address) => {
  if (err) throw err;
  console.log(`Feedback Engine service listening at ${address}`);
});
