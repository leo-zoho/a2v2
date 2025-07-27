import Fastify from 'fastify';
import { ObjectiveHubSpec } from '../../spec/a2_architecture_spec_v2';

const fastify = Fastify();

fastify.post('/normalized-goal', async (request, reply) => {
  // Placeholder: handle NormalizedGoalEnvelope
  return { message: 'Objective received', input: request.body };
});

fastify.get('/spec', async () => ObjectiveHubSpec);

fastify.listen({ port: 3003 }, (err, address) => {
  if (err) throw err;
  console.log(`ObjectiveHub service listening at ${address}`);
});
