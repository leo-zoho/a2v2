"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const a2_architecture_spec_v2_1 = require("../../spec/a2_architecture_spec_v2");
const axios_1 = __importDefault(require("axios"));
const fastify = (0, fastify_1.default)();
fastify.post('/normalized-goal', async (request, reply) => {
    // Validate input (basic check)
    const envelope = request.body;
    if (!envelope || typeof envelope !== 'object') {
        return reply.status(400).send({ error: 'Invalid NormalizedGoalEnvelope' });
    }
    // Forward to MGTL-Ω
    try {
        const mgtlResp = await axios_1.default.post('http://localhost:3001/process-objective', envelope);
        return { message: 'Objective processed by MGTL-Ω', mgtlOmegaResponse: mgtlResp.data };
    }
    catch (err) {
        let details = '';
        if (err && typeof err === 'object' && 'message' in err) {
            details = err.message;
        }
        else {
            details = String(err);
        }
        return reply.status(502).send({ error: 'Failed to reach MGTL-Ω', details });
    }
});
fastify.get('/spec', async () => a2_architecture_spec_v2_1.ObjectiveHubSpec);
fastify.listen({ port: 3003 }, (err, address) => {
    if (err)
        throw err;
    console.log(`ObjectiveHub service listening at ${address}`);
});
