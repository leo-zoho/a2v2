import Fastify from 'fastify';
import { ObjectiveHubSpec, NormalizedGoalEnvelope } from '../../spec/a2_architecture_spec_v2';
import axios from 'axios';

const fastify = Fastify();

fastify.post('/normalized-goal', async (request, reply) => {
  // Validate input (basic check)
  const envelope = request.body as NormalizedGoalEnvelope;
  if (!envelope || typeof envelope !== 'object') {
    return reply.status(400).send({ error: 'Invalid NormalizedGoalEnvelope' });
  }
  // Forward to MGTL-Ω
  try {
    const mgtlResp = await axios.post('http://localhost:3001/process-objective', envelope);
    return { message: 'Objective processed by MGTL-Ω', mgtlOmegaResponse: mgtlResp.data };
  } catch (err) {
    let details = '';
    if (err && typeof err === 'object' && 'message' in err) {
      details = (err as any).message;
    } else {
      details = String(err);
    }
    return reply.status(502).send({ error: 'Failed to reach MGTL-Ω', details });
  }
});

fastify.get('/spec', async () => ObjectiveHubSpec);

fastify.listen({ port: 3003 }, (err, address) => {
  if (err) throw err;
  console.log(`ObjectiveHub service listening at ${address}`);
});
