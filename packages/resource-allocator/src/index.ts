import Fastify from 'fastify';
import { ResourceAllocatorSpec } from '../../spec/a2_architecture_spec_v2';

const fastify = Fastify();

fastify.post('/allocate', async (request, reply) => {
  // Placeholder: handle resource allocation
  return { message: 'Resource allocated', input: request.body };
});

fastify.get('/spec', async () => ResourceAllocatorSpec);

fastify.listen({ port: 3005 }, (err, address) => {
  if (err) throw err;
  console.log(`ResourceAllocator service listening at ${address}`);
});
