"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A2SystemRegistry = exports.ResourceAllocatorSpec = exports.RegistriesSpec = exports.ObjectiveHubSpec = exports.SwarmManagerSpec = exports.MgtlOmegaSpec = exports.SwarmCharterRequest = exports.NormalizedGoalEnvelope = exports.LifecycleState = exports.ModuleStatus = void 0;
exports.validateRegistry = validateRegistry;
// --- 1. Enhanced Enums & Data Contracts (TypeScript parity with Python) ---
var ModuleStatus;
(function (ModuleStatus) {
    ModuleStatus["ACTIVE"] = "ACTIVE";
    ModuleStatus["ARCHIVED"] = "ARCHIVED";
    ModuleStatus["DEPRECATED"] = "DEPRECATED";
})(ModuleStatus || (exports.ModuleStatus = ModuleStatus = {}));
var LifecycleState;
(function (LifecycleState) {
    LifecycleState["INIT"] = "INITIALIZING";
    LifecycleState["READY"] = "READY";
    LifecycleState["DEGRADED"] = "DEGRADED";
    LifecycleState["TERMINATED"] = "TERMINATED";
})(LifecycleState || (exports.LifecycleState = LifecycleState = {}));
class NormalizedGoalEnvelope {
}
exports.NormalizedGoalEnvelope = NormalizedGoalEnvelope;
class SwarmCharterRequest {
}
exports.SwarmCharterRequest = SwarmCharterRequest;
// --- 2. Refined Module Specifications (add more modules as placeholders) ---
exports.MgtlOmegaSpec = {
    module: "MGTL-Ω (Meta-Goal Translation Layer)",
    moduleId: "MGTL-OMEGA-V1.0",
    version: "1.0",
    status: ModuleStatus.ACTIVE,
    lifecycleState: LifecycleState.READY,
    description: "The 'cognitive brain' of the organism...",
    purpose: "To serve as the core engine of strategic foresight and planning...",
    responsibilities: [
        "Decomposing high-level objectives into a hierarchical tree of sub-goals.",
        "Enforcing the Pillar-First Decomposition (PFD) protocol for high-novelty missions.",
    ],
    triggers: [
        "Activated upon receipt of a 'NormalizedGoalEnvelope' from the ObjectiveHub.",
    ],
    interfaces: {
        processObjective: {
            type: "internal_service_call",
            description: "The primary entry point that initiates the full 11-stage cognitive relay.",
            inputSchema: NormalizedGoalEnvelope,
            outputSchema: SwarmCharterRequest,
            perfContract: { p99LatencyMs: 500 },
        },
    },
    subModules: {
        semanticDecomposer: {
            purpose: "To perform the core brainstorming and deconstruction of the objective.",
            actions: [
                "In PFD mode, generate a FunctionalPillarMap.",
                "In Standard mode, generate a RawSubGoalList using embedding clustering.",
            ],
            algorithmicCore: {
                description: "Executes one of two decomposition algorithms based on the Governor's directive.",
                pseudoCode: `FUNCTION decompose(envelope: NormalizedGoalEnvelope, protocol: DecompositionProtocol) -> SubGoal[] {...}`,
            },
        },
        curiosityAmplifier: {
            purpose: "To be the agent of serendipity, injecting structured novelty to prevent groupthink.",
            actions: [
                "Apply stochastic perturbations to existing sub-goals.",
                "Inject 1-2 high-risk, high-reward 'wildcard' ideas into the bundle.",
            ],
            algorithmicCore: {
                description: "Injects novelty by mutating existing sub-goals and adding 'wildcards'.",
                pseudoCode: `FUNCTION amplify(subgoals: SubGoal[]) -> SubGoal[] {...}`,
            },
        },
    },
    constraints: [
        "The entire cognitive relay must complete in under 500ms (p99).",
    ],
    dependencies: [
        { moduleId: "OBJ-HUB-V1.2", required: true },
        { moduleId: "SW-MGR-V1.0", required: true },
        { moduleId: "REGISTRIES-V1.0", required: true },
    ],
    governanceHooks: ["AUDIT_DECOMPOSITION", "FLAG_HIGH_RISK_WILDCARD"],
    knownFlaws: [],
};
exports.SwarmManagerSpec = {
    module: "SwarmManager",
    moduleId: "SW-MGR-V1.0",
    version: "1.0",
    status: ModuleStatus.ACTIVE,
    lifecycleState: LifecycleState.READY,
    description: "The 'fleet commander' of the organism...",
    purpose: "To serve as the primary bridge between cognitive planning and physical execution...",
    responsibilities: ["Chartering new swarms...", "Composing swarms...", "Deploying, monitoring, and scaling..."],
    triggers: ["Activated by a 'SwarmCharterRequest' from MGTL-Ω..."],
    interfaces: {
        charterSwarm: {
            type: "internal_service_call",
            description: "Primary interface to create and deploy a new swarm.",
            inputSchema: SwarmCharterRequest,
            perfContract: { p99LatencyMs: 200 },
        },
    },
    subModules: {
        pillarAwareComposer: {
            purpose: "To intelligently compose the optimal team of agents for a mission...",
            actions: [
                "Analyze the 'pillar_origin' and 'intentTags'...",
                "Query the Registries...",
                "Apply a weighting algorithm...",
            ],
            algorithmicCore: {
                description: "A scoring and selection algorithm to compose the most effective swarm.",
                pseudoCode: `FUNCTION compose_swarm(charter: SwarmCharterRequest) -> string[] {...}`,
            },
        },
    },
    constraints: ["All swarm composition decisions must be logged..."],
    dependencies: [
        { moduleId: "MGTL-OMEGA-V1.0" },
        { moduleId: "REGISTRIES-V1.0" },
        { moduleId: "RESOURCE-ALLOCATOR-V1.0" },
    ],
    governanceHooks: [],
    knownFlaws: [],
};
// Placeholders for additional modules (expand as needed)
exports.ObjectiveHubSpec = {
    module: "ObjectiveHub",
    moduleId: "OBJ-HUB-V1.2",
    version: "1.2",
    status: ModuleStatus.ACTIVE,
    lifecycleState: LifecycleState.READY,
    description: "Central hub for receiving and normalizing objectives.",
    purpose: "Acts as the entry point for new objectives.",
    responsibilities: ["Receive objectives", "Normalize and validate input"],
    triggers: ["External API call"],
    interfaces: {},
    subModules: {},
    constraints: [],
    dependencies: [],
};
exports.RegistriesSpec = {
    module: "Registries",
    moduleId: "REGISTRIES-V1.0",
    version: "1.0",
    status: ModuleStatus.ACTIVE,
    lifecycleState: LifecycleState.READY,
    description: "Service registry and lookup.",
    purpose: "Maintains registry of agents, modules, and resources.",
    responsibilities: ["Lookup", "Registration", "Discovery"],
    triggers: ["Lookup request"],
    interfaces: {},
    subModules: {},
    constraints: [],
    dependencies: [],
};
exports.ResourceAllocatorSpec = {
    module: "ResourceAllocator",
    moduleId: "RESOURCE-ALLOCATOR-V1.0",
    version: "1.0",
    status: ModuleStatus.ACTIVE,
    lifecycleState: LifecycleState.READY,
    description: "Allocates resources to swarms and modules.",
    purpose: "Handles resource allocation requests.",
    responsibilities: ["Allocate resources", "Track usage"],
    triggers: ["Allocation request"],
    interfaces: {},
    subModules: {},
    constraints: [],
    dependencies: [],
};
// --- 3. Registry & Diagnostics ---
exports.A2SystemRegistry = {
    [exports.MgtlOmegaSpec.moduleId]: exports.MgtlOmegaSpec,
    [exports.SwarmManagerSpec.moduleId]: exports.SwarmManagerSpec,
    [exports.ObjectiveHubSpec.moduleId]: exports.ObjectiveHubSpec,
    [exports.RegistriesSpec.moduleId]: exports.RegistriesSpec,
    [exports.ResourceAllocatorSpec.moduleId]: exports.ResourceAllocatorSpec,
};
function validateRegistry(registry, showSLOWarnings = false) {
    const errors = [];
    const allIds = Object.keys(registry);
    for (const [moduleId, spec] of Object.entries(registry)) {
        if (!spec.subModules || Object.keys(spec.subModules).length === 0) {
            errors.push(`[WARNING] ${moduleId}: no subModules defined.`);
        }
        for (const [name, sm] of Object.entries(spec.subModules || {})) {
            if (showSLOWarnings && !sm.algorithmicCore) {
                errors.push(`[INFO]    ${moduleId}.${name}: missing algorithmicCore detail.`);
            }
        }
        for (const dep of spec.dependencies) {
            if (!allIds.includes(dep.moduleId)) {
                errors.push(`[ERROR]   ${moduleId}: broken dependency '${dep.moduleId}'.`);
            }
        }
    }
    return errors;
}
