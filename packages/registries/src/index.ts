import Fastify from 'fastify';
import { RegistriesSpec } from '../../spec/a2_architecture_spec_v2';

const fastify = Fastify();

fastify.get('/lookup', async (request, reply) => {
  // Placeholder: handle registry lookup
  return { message: 'Registry lookup', query: request.query };
});

fastify.get('/spec', async () => RegistriesSpec);

fastify.listen({ port: 3004 }, (err, address) => {
  if (err) throw err;
  console.log(`Registries service listening at ${address}`);
});
