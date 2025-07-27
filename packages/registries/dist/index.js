"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)();
fastify.get('/lookup', async (request, reply) => {
    // Placeholder: handle registry lookup
    return { message: 'Registry lookup', query: request.query };
});
fastify.get('/spec', async () => ({ module: 'Registries', version: '1.0' }));
fastify.listen({ port: 3004 }, (err, address) => {
    if (err)
        throw err;
    console.log(`Registries service listening at ${address}`);
});
