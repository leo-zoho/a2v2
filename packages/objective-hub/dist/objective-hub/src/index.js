"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const a2_architecture_spec_v2_1 = require("../../spec/a2_architecture_spec_v2");
const fastify = (0, fastify_1.default)();
fastify.post('/normalized-goal', async (request, reply) => {
    // Placeholder: handle NormalizedGoalEnvelope
    return { message: 'Objective received', input: request.body };
});
fastify.get('/spec', async () => a2_architecture_spec_v2_1.ObjectiveHubSpec);
fastify.listen({ port: 3003 }, (err, address) => {
    if (err)
        throw err;
    console.log(`ObjectiveHub service listening at ${address}`);
});
