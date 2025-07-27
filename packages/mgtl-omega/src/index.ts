import Fastify from 'fastify';
import { MgtlOmegaSpec, SwarmCharterRequest } from '../../spec/a2_architecture_spec_v2';

const fastify = Fastify();

// Main interface: processObjective
fastify.post('/process-objective', async (request, reply) => {
  // Simulate cognitive relay and return a SwarmCharterRequest
  const charter: SwarmCharterRequest = {};
  return {
    message: 'MGTL-Ω processed the objective and produced a SwarmCharterRequest',
    charter,
    input: request.body
  };
});

fastify.get('/spec', async () => MgtlOmegaSpec);

fastify.listen({ port: 3001 }, (err, address) => {
  if (err) throw err;
  console.log(`MGTL-Ω service listening at ${address}`);
});
