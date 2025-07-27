import Fastify from 'fastify';
import { SwarmManagerSpec } from '../../spec/a2_architecture_spec_v2';

const fastify = Fastify();

// Main interface: charterSwarm
fastify.post('/charter-swarm', async (request, reply) => {
  // Placeholder: implement swarm chartering logic here
  return { message: 'Swarm chartered', input: request.body };
});

fastify.get('/spec', async () => SwarmManagerSpec);

fastify.listen({ port: 3002 }, (err, address) => {
  if (err) throw err;
  console.log(`SwarmManager service listening at ${address}`);
});
