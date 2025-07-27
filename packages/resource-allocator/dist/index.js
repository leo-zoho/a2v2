"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)();
fastify.post('/allocate', async (request, reply) => {
    // Placeholder: handle resource allocation
    return { message: 'Resource allocated', input: request.body };
});
fastify.get('/spec', async () => ({ module: 'ResourceAllocator', version: '1.0' }));
fastify.listen({ port: 3005 }, (err, address) => {
    if (err)
        throw err;
    console.log(`ResourceAllocator service listening at ${address}`);
});
