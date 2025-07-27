"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const a2_architecture_spec_v2_1 = require("../../spec/a2_architecture_spec_v2");
const fastify = (0, fastify_1.default)();
fastify.get('/lookup', async (request, reply) => {
    // Placeholder: handle registry lookup
    return { message: 'Registry lookup', query: request.query };
});
fastify.get('/spec', async () => a2_architecture_spec_v2_1.RegistriesSpec);
fastify.listen({ port: 3004 }, (err, address) => {
    if (err)
        throw err;
    console.log(`Registries service listening at ${address}`);
});
