import Fastify from 'fastify';

const fastify = Fastify();

fastify.post('/notify', async (request, reply) => {
  // Simulate notification dispatch
  return { message: 'Notification sent', input: request.body };
});

fastify.get('/health', async () => ({ status: 'ok', service: 'notification' }));

fastify.listen({ port: 3009 }, (err, address) => {
  if (err) throw err;
  console.log(`Notification service listening at ${address}`);
});
