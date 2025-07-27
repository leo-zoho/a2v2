"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const a2_architecture_spec_v2_1 = require("../../spec/a2_architecture_spec_v2");
const fastify = (0, fastify_1.default)();
// Main interface: charterSwarm
fastify.post('/charter-swarm', async (request, reply) => {
    // Placeholder: implement swarm chartering logic here
    return { message: 'Swarm chartered', input: request.body };
});
fastify.get('/spec', async () => a2_architecture_spec_v2_1.SwarmManagerSpec);
fastify.listen({ port: 3002 }, (err, address) => {
    if (err)
        throw err;
    console.log(`SwarmManager service listening at ${address}`);
});
